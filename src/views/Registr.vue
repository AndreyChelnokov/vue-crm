<template>
  <form @submit.prevent="submitHandler" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
            v-if="$v.email.$dirty && !$v.email.required"
            class="helper-text invalid">Поле не должно быть пустым</small>
        <small
            v-else-if="$v.email.$dirty && !$v.email.email"
            class="helper-text invalid">Введите корректный email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
            v-if="$v.password.$dirty && !$v.password.minLength"
            class="helper-text invalid">Пороль должен быть длиннее {{ $v.password.$params.minLength.min}} символов</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required)}"

        >
        <label for="name">Имя</label>
        <small
            v-if="$v.name.$dirty && !$v.name.required"
            class="helper-text invalid">Введите ваше имя</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="slag" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <a href="/">Войти!</a>
      </p>
    </div>
  </form>
</template>


<script>
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required},
    slag: {checked: v => v}
  },
  data: () => {
    return {
      email: '',
      password: '',
      name: '',
      slag: false
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        await this.$store.dispatch('registr', formData)
        this.$router.push('/');
      } catch (e) {
        console.log(e)
      }

    }
  }
 }
</script>
