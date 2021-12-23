<template>
  <div class="
flex
flex-col
items-center">
    <p class="last-r">R = {{ last_r }}</p>
    <svg-picture @update:r_err="updateR_ERR" :tmp_r="newPoint.r" @add:point="sendPointFromSvg" :points="points" :last_r="last_r"></svg-picture>
    <fields @clear:r_err="clearR_ERR" :r_err="r_err" @update:point="changePoint" @update:send="sendPoint"></fields>
    <man-buttons @delete:points="updatePoints"></man-buttons>
    <my-table :points="points"></my-table>
  </div>
</template>

<script>
import ManButtons from "@/components/main/ManagerButtons";
import Fields from "@/components/main/Fields";
import MyTable from "@/components/main/Table";
import request from "@/ajax/request";
import storage from "@/storage/storage";
import SvgPicture from "@/components/main/svg/SvgPicture";

export default {
  name: "my-main",
  components: {SvgPicture, MyTable, Fields, ManButtons},
  data() {
    return {
      newPoint: {
        x: '',
        y: '',
        r: '',
      },
      points: [],
      last_r: 0,
      r_err: ''
    }
  },
  methods: {
    changePoint(value) {
      this.newPoint = value
    },
    async sendPoint() {
      const res = await request.auth.addPoint({
        x: this.newPoint.x,
        y: this.newPoint.y,
        r: this.newPoint.r,
        jws: storage.getJws()
      })
      if (!res.data.jwsProblem) {
        storage.addJws(res.data.jws)
        await this.updatePoints()
        this.last_r = this.newPoint.r
      } else {
        await this.$router.push("/")
      }
    },
    async updatePoints() {
      const jwsCheck = await request.auth.checkLogin({
        jws: storage.getJws()
      })

      if (!jwsCheck.data.jwsProblem) {
        storage.addJws(jwsCheck.data.jws)
        const res = await request.auth.getPoints({
          jws: storage.getJws()
        })
        const data = res.data
        this.points = data
        this.last_r = data[data.length - 1].r
      } else {
        await this.$router.push("/")
      }
    },
    async sendPointFromSvg(value) {
      this.newPoint = value
      await this.sendPoint()
      this.r_err = 'clear'
    },
    updateR_ERR(value) {
      this.r_err = value
    },
    clearR_ERR() {
      this.r_err = ''
    }
  },
  async mounted() {
    await this.updatePoints()
  },
}
</script>

<style scoped>
.last-r {
  position: relative;
  top: 3.2em;
  left: 9.3em;
  font-size: 12px;
  font-weight: 700;
}
</style>