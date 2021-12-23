<template>
  <div class="
flex
flex-col
items-center
custom-fields">
    <p class="name">Введите X:</p>
    <my-input :placeholder="placeholders[0]" v-model="newPoint.x" @input="emitModelValue"></my-input>
    <my-error class="mt-1" :error="errors[0]"></my-error>
    <p class="name">Введите Y:</p>
    <my-input :placeholder="placeholders[1]" v-model="newPoint.y" @input="emitModelValue"></my-input>
    <my-error class="mt-1" :error="errors[1]"></my-error>
    <p class="name">Введите R:</p>
    <my-input :placeholder="placeholders[2]" v-model="newPoint.r" @input="emitModelValue"></my-input>
    <my-error class="mt-1" :error="errors[2]"></my-error>
    <my-button @click="validateAndEmitSending">Проверить</my-button>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
import MyError from "@/components/UI/MyError";

export default {
  name: "Fields",
  components: {MyError, MyButton, MyInput},
  props: {
    r_err: String
  },
  data() {
    return {
      placeholders: ["-5 ... 3", "-3 ... 5", "-5 ... 3"],
      newPoint: {
        x: '',
        y: '',
        r: ''
      },
      errors: ['', '', '']
    }
  },
  methods: {
    emitModelValue() {
      this.$emit("update:point", this.newPoint)
    },
    emitSending() {
      this.$emit("update:send")
    },
    validateAndEmitSending() {
      this.clearError()
      this.$emit("clear:r_err")
      if (this.newPoint.x === '') this.errors[0] = 'Введите X'
      if (this.newPoint.y === '') this.errors[1] = 'Введите Y'
      if (this.newPoint.r === '') this.errors[2] = 'Введите R'

      if (isNaN(this.newPoint.x)) this.errors[0] = 'Введите число (с точкой)'
      if (isNaN(this.newPoint.y)) this.errors[1] = 'Введите число (с точкой)'
      if (isNaN(this.newPoint.r)) this.errors[2] = 'Введите число (с точкой)'


      if (this.newPoint.x < -5 || this.newPoint.x > 3) this.errors[0] = 'Введите число в правильном диапазоне'
      if (this.newPoint.y < -3 || this.newPoint.y > 5) this.errors[1] = 'Введите число в правильном диапазоне'
      if (this.newPoint.r > 3) this.errors[2] = 'Введите число в правильном диапазоне'

      if (this.newPoint.r < 0) this.errors[2] = 'Радиус не может быть отрицательным'

      if (this.isErrorClear()) this.emitSending()
    },
    clearError() {
      for (let i = 0; i < 3; i++) {
        this.errors[i] = ''
      }
    },
    isErrorClear() {
      for (let i = 0; i < 3; i++) {
        if (this.errors[i] !== '') return false
      }
      return this.r_err === '';
    }
  },
  updated() {
    if (this.r_err === 'clear') this.clearError()
    else if (this.r_err !== '') this.errors[2] = this.r_err
  }
}
</script>

<style scoped>
.custom-fields .name {
  margin-top: 20px;
}

.custom-fields button {
  margin-bottom: 30px;
  margin-top: 10px;
}
</style>