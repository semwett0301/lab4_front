<template>
  <div class="table_container">
    <table>
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Попала?</th>
      </tr>
      <tr v-for="point in tmp_points" :key="point.id">
        <td>{{ point.x }}</td>
        <td>{{ point.y }}</td>
        <td>{{ point.r }}</td>
        <td>{{ point.hit }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "my-table",
  props: {
    points: Array
  },
  data() {
    return {
      tmp_points: []
    }
  },
  updated() {
    this.tmp_points = this.points
    for (let i = 0; i < this.tmp_points.length; i++) {
      this.tmp_points[i].x = parseFloat(this.tmp_points[i].x).toFixed(2)
      this.tmp_points[i].y = parseFloat(this.tmp_points[i].y).toFixed(2)
      this.tmp_points[i].r = parseFloat(this.tmp_points[i].r).toFixed(2)

      if (this.tmp_points[i].hit) {
        this.tmp_points[i].hit = 'Да'
      } else {
        this.tmp_points[i].hit = 'Нет'
      }
    }
  }
}
</script>

<style scoped>
table {

  border-collapse: collapse;
  width: 100%;
}

tr {
  width: 100%;
  height: 3em;
}

td, th {
  background-color: white;
  text-align: center;
}
.table_container {
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 2em;
  padding: 0.5em;
  width: 70%;
  background-color: white;
  display: flex;
  justify-content: space-around;
}
</style>