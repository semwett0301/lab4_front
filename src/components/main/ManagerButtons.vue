<template>
  <div class="man-buttons">
    <my-button @click="close">Вернуться</my-button>
    <my-button @click="remove">Очистить</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import storage from "@/storage/storage";
import request from "@/ajax/request";

export default {
  name: "man-buttons",
  components: {MyButton},
  methods: {
    close() {
      storage.clearJws()
      this.$router.push("/")
    },
    async remove() {
      const res = await request.auth.removePoints({
        jws: storage.getJws()
      })
      if (!res.data.jwsProblem) {
        this.$emit("delete:points")
        storage.addJws(res.data.jws)
      } else {
        await this.$router.push("/")
      }
      console.log(res.data)
    }
  }
}
</script>

<style scoped>
.man-buttons {
  display: flex;
  justify-content: space-around;
  width: 35%;
}

.man-buttons * {
  width: 45%;
}
</style>