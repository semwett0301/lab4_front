<template>
  <p class="
text-sm
text-red-500
">{{error}}</p>
</template>

<script>
export default {
  name: "my-error",
  props: {
    error: String
  }
}
</script>

<style scoped>

</style>