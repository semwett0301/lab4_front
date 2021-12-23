<template>
  <div class="index-page">
    <my-header></my-header>
    <my-login v-if="mode.login"></my-login>
    <my-registration v-else></my-registration>
    <my-button @click="change_mode" class="mt-20 bg-violet-500">{{mode.text}}</my-button>
  </div>
</template>

<script>
import MyHeader from "@/components/index/Header";
import MyLogin from "@/components/index/Login";
import MyRegistration from "@/components/index/Registration";
import MyButton from "@/components/UI/MyButton";


export default {
  name: "my-index",
  components: {
    MyButton,
    MyRegistration,
    MyLogin,
    MyHeader
  },
  data() {
    return {
      mode: {
        registration: false,
        login: true,
        text: "Регистрация"
      }
    }
  },

  methods: {
    change_mode() {
      let tmp = this.mode.registration
      this.mode.registration = this.mode.login
      this.mode.login = tmp

      if (this.mode.login) {
        this.mode.text = "Регистрация"
      } else {
        this.mode.text = "Вход"
      }
    }
  },
}
</script>

<style scoped>
  .index-page {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>