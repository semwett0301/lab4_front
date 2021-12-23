<template>
  <header class="mb-10">
    <h1 class="student_name mt-5">Мокров Семён Андреевич P3215</h1>
    <h1>Вариант №52234</h1>
  </header>
</template>

<script>
export default {
  name: "my-header"
}
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
  }
  h1 {
    font-family: inherit;
    color: black;
    font-size: 40px;
    font-weight: bold;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1100px) and (max-width: 1300px){
    h1 {
      font-size: 30px;
    }
  }

  @media (min-width: 900px) and (max-width: 1100px){
    h1 {
      font-size: 26px;
    }
  }

  @media  (max-width: 900px){
    h1 {
      font-size: 22px;
    }
  }
</style>