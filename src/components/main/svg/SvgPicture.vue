<template>
    <div class="svg_container" id="svg_container" @click="emitPoint">
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
        <rect x="150" y="150" width="100" height="50" style="stroke-opacity: 0.6; fill: rgb(51, 153, 255);"/>
        <rect x="761.101" y="270.492" width="0.74" height="0.74" style="fill: rgb(216, 216, 216); fill-opacity: 0.6;"/>
        <path style="fill: rgb(51, 153, 255);" transform="matrix(0.798786, 0, 0, 0.798786, -104.972481, 27.785759)"
              d="M 194.01 153 A 125.19 125.19 0 0 1 319.2 27.81 L 319.2 153 Z"
              bx:shape="pie 319.2 153 0 125.19 270 360 1@d76241e1"/>
        <path d="M 24.602 -9.73 L 24.602 40.27 L -75.398 40.27 L 24.602 -9.73 Z" style="fill: rgb(51, 153, 255);"
              transform="matrix(1, -0.000002, -0.001532, -1, 125.45969, 190.269954)"
              bx:shape="triangle -75.398 -9.73 100 50 1 0 1@bbc4cb81" bx:origin="0.250735 1.979981"/>
        <line style="stroke: rgb(0, 0, 0);" x1="25" y1="149.5" x2="275" y2="150.5" bx:origin="0.500692 0"/>
        <line style="stroke: rgb(0, 0, 0);" x1="150" y1="25" x2="150" y2="275"
              transform="matrix(-1, 0, 0, -1, 300, 300)"/>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 213.714233, 121.107925)" x="106.508" y="57.716">R
        </text>
        <line style="stroke: rgb(0, 0, 0);" x1="50" y1="148" x2="50" y2="152"/>
        <line style="stroke: rgb(0, 0, 0);" x1="100" y1="148" x2="100" y2="152"/>
        <line style="stroke: rgb(0, 0, 0);" x1="200" y1="148" x2="200" y2="152"/>
        <line style="stroke: rgb(0, 0, 0);" x1="250" y1="148" x2="250" y2="152"/>
        <line style="stroke: rgb(0, 0, 0);" x1="150" y1="48" x2="150" y2="52"
              transform="matrix(0, 1, -1, 0, 200, -100)"/>
        <line style="stroke: rgb(0, 0, 0);" x1="150" y1="248" x2="150" y2="252"
              transform="matrix(0, 1, -1, 0, 400, 100)"/>
        <line style="stroke: rgb(0, 0, 0);" x1="150" y1="98" x2="150" y2="102"
              transform="matrix(0, 1, -1, 0, 250, -50)"/>
        <line style="stroke: rgb(0, 0, 0);" x1="150" y1="198" x2="150" y2="202"
              transform="matrix(0, 1, -1, 0, 350, 50)"/>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 120.714241, 78.107925)" x="106.508" y="57.716">R/2
        </text>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 120.714241, 29.036404)" x="106.508" y="57.716">R
        </text>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 120.714233, 228.107925)" x="106.508" y="57.716">-R
        </text>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 11.71424, 121.107925)" x="106.508" y="57.716">-R
        </text>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 120.714241, 178.107925)" x="106.508" y="57.716">-R/2
        </text>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 58.714241, 121.107925)" x="106.508" y="57.716">-R/2
        </text>
        <text
            style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 19.225px; font-weight: 700; white-space: pre;"
            transform="matrix(0.321932, 0, 0, 0.416125, 158.714233, 121.107925)" x="106.508" y="57.716">-R/2
        </text>
        <path d="M 90.071 58.82 L 91.571 62.82 L 88.571 62.82 L 90.071 58.82 Z" style=""
              transform="matrix(1, -0.000004, 0.000004, 1, 59.928764, -36.820053)"
              bx:shape="triangle 88.571 58.82 3 4 0.5 0 1@01c55a16"/>
        <path d="M 122.788 31.44 L 124.288 35.44 L 121.288 35.44 L 122.788 31.44 Z" style=""
              transform="matrix(0.000077, -1, -1, -0.000077, 310.430658, 273.290742)"
              bx:shape="triangle 121.288 31.44 3 4 0.5 0 1@511d04ab"/>
        <g v-for="point in points" :key="point.id">
          <circle r="3" :cx="this.getSvgX(point.x)" :cy="this.getSvgY(point.y)"
                  :fill="this.chooseColor(point.x, point.y)"/>
        </g>
      </svg>
    </div>
</template>

<script>

export default {
  name: "SvgPicture",
  props: {
    points: Array,
    last_r: String,
    tmp_r: String
  },
  data() {
    return {
      last_point: this.points[this.points.length - 1],
      new_point: {
        x: '',
        y: '',
        r: ''
      }
    }
  },
  methods: {
    getSvgX(x) {
      return x / this.last_r * 100 + 150
    },
    getSvgY(y) {
      return 150 - y / this.last_r * 100
    },
    chooseColor(x, y) {
      if (x <= this.last_r && y >= - this.last_r / 2 && x >= 0 && y <= 0) return "green";
      if (x >= -this.last_r && x <= 0 && y <= 0 && y >= -this.last_r / 2) {
        if (y >= -x / 2 - this.last_r / 2) return "green";
      }
      if (y >= 0 && y <= this.last_r && x <= 0 && x >= -this.last_r) {
        if (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(this.last_r, 2)) return "green";
      }
      return "red";
    },
    emitPoint(event) {
      let scope = this.tmp_r
      if (!isNaN(scope) && scope !== '' && scope >= 0 && scope <= 3) {
        this.new_point.x = String(((event.pageX - document.getElementById('svg_container').offsetLeft - 150) / 99.5) * Number(scope));
        this.new_point.y = String((-(event.pageY - document.getElementById('svg_container').offsetTop - 150) / 99.5) * Number(scope));
        this.new_point.r = this.tmp_r
        console.log("Эмит")
        this.$emit("add:point", this.new_point)
      } else if (scope === '') {
        this.$emit("update:r_err", "Введите R")
      } else if (isNaN(scope)) {
        this.$emit("update:r_err", "Введите число (с точкой)")
      } else if (scope > 3) {
        this.$emit("update:r_err", "Введите число в правильном диапазоне")
      } else {
        this.$emit("update:r_err", "Радиус не может быть отрицательным")
      }
    }
  }
}
</script>

<style scoped>
.svg_container {
  width: 300px;
  height: 300px;
  margin-bottom: 2em;
}
.svg_container svg {
  border: 1px solid black;
  border-radius: 1em;
}
</style>