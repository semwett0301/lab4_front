<template>
  <div class="
login_form
flex-col
items-center
w-full">
    <h2>Логинка</h2>
    <div class="login_inputs flex-col items-center">
      <my-input :placeholder="placeholders[0]" v-model="username"></my-input>
      <my-error class="mt-1" :error="errors[0]"></my-error>
      <my-password-input class="mt-5" :placeholder="placeholders[1]" v-model="password"/>
      <my-error class="mb-5 mt-1" :error="errors[1]"></my-error>
    </div>
    <my-button @click="sendLogin">Войти</my-button>
  </div>
</template>

<script>
import request from "@/ajax/request";
import storage from "@/storage/storage"
import hash from "@/hashcode/hash";
import MyError from "@/components/UI/MyError";
import MyPasswordInput from "@/components/UI/MyPasswordInput";

export default {
  name: "my-login",
  components: {MyPasswordInput, MyError},
  data() {
    return {
      registrationWidth: 60,
      username: '',
      password: '',
      login: false,
      errors: ['', ''],
      placeholders: ["Введите логин", "Введите пароль"]
    }
  },
  computed: {
    registrationHeight: function () {
      return this.registrationWidth / 3
    }
  },
  methods: {
    async sendLogin() {
      this.clearError()
      if (this.username === '') {
        this.errors[0] = 'Введите логин'
      } else if (this.password === '') {
        this.errors[1] = 'Введите пароль'
      } else {
        await this.loginRequest()
      }
    },
    async loginRequest() {
      try {
        let hash_pass
        await hash.code(this.password).then(res => {
          hash_pass = res
        })
        const res = await request.auth.login({
          username: this.username,
          password: hash_pass,
        })
        const data = res.data
        if (data.loginProblem) {
          this.setLoginError("Неверный логин")
          this.setLogin(false)
        } else if (data.passwordProblem) {
          this.setPasswordError("Неверный пароль")
          this.setLogin(false)
        } else {
          this.clearError()
          this.setLogin(true)
          storage.addJws(data.jws)
          await this.$router.push("main")
        }
      } catch (e) {
        console.log(e)
      }
    },
    setLogin(value) {
      this.login = value
    },
    setLoginError(value) {
      this.errors[0] = value
    },
    setPasswordError(value) {
      this.errors[1] = value
    },
    clearError() {
      for (let i = 0; i < 2; i++) {
        this.errors[i] = ''
      }
    }
  },
}
</script>

<style scoped>
h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

@media (max-width: 900px){
  h2 {
    font-size: 16px;
  }
}

.login_form, .login_inputs {
  display: flex;
}
</style>