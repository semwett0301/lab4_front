<template>
  <div class="reg_form
flex-col
items-center
w-full">
    <h2>Регистрашка</h2>
    <div class="reg_inputs flex-col items-center">
      <my-input :placeholder="placeholders[0]" v-model="username"></my-input>
      <my-error class="mt-1" :error="errors[0]"></my-error>
      <my-password-input class="mt-5" :placeholder="placeholders[1]" v-model="password"></my-password-input>
      <my-error class="mb-5 mt-1" :error="errors[1]"></my-error>
    </div>
    <my-button @click="sendRegistration">Зарегистрироваться</my-button>
  </div>
</template>

<script>
import request from "@/ajax/request";
import storage from "@/storage/storage";
import hash from "@/hashcode/hash";
import MyPasswordInput from "@/components/UI/MyPasswordInput";
export default {
  name: "my-registration",
  components: {MyPasswordInput},
  data() {
    return {
      username: '',
      password: '',
      placeholders: ["Введите логин", "Введите пароль"],
      login: false,
      errors: ['', ''],
    }
  },
  methods: {
    async sendRegistration() {
      this.clearError()
      if (this.username === '') {
        this.errors[0] = 'Введите логин'
      } else if (this.password === '') {
        this.errors[1] = 'Введите пароль'
      } else {
        await this.registrationRequest()
      }
    },
    async registrationRequest() {
      try {
        let hash_pass = ''
        await hash.code(this.password).then(res => {
          hash_pass = res
        })
        const res = await request.auth.registration({
          username: this.username,
          password: hash_pass,
        })
        if (res.data.loginProblem) {
          this.errors[0] = "Такой пользователь уже существует"
        } else {
          storage.addJws(res.data.jws)
          this.setLogin(true)
          await this.$router.push("/main")
        }
      } catch (e) {
        console.log(e)
      }
    },
    setLogin(value) {
      this.login = value
    },
    clearError() {
      for (let i = 0; i < 2; i++) {
        this.errors[i] = ''
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.reg_form, .reg_inputs {
  display: flex;
}
@media (max-width: 900px){
  h2 {
    font-size: 16px;
  }
}
</style>