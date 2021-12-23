<template>
  <button class="
rounded-3xl
bg-blue-500
text-white
adapted-button
">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
}
</script>

<style scoped>

.adapted-button {
  width: 20vw;
  height: 50px;
}
@media (max-width: 950px) {
  .adapted-button {
    width: 190px;
    height: 40px;
    font-size: 14px;
  }
}

</style>