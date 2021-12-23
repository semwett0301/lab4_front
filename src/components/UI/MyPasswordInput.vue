<template>
  <input type="password" :placeholder="placeholder" :value="modelValue" @input="emitValue" class="
text-center
align-middle
rounded-md
custom-input
">
</template>

<script>
export default {
  name: "my-password-input",
  props: {
    placeholder:{
      String,
      required: true
    },
    modelValue: [Number, String],
  },
  methods: {
    emitValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.custom-input {
  border: #6e6e6e solid 1px;
  color: black;
  background: white;
  height: 2em;
}
</style>