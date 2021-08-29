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
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/registr">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>


<script>
  import {email, required, minLength} from 'vuelidate/lib/validators';
  import messagi from '@/utils/messagi'
  export default {
    mounted() {
      if (messagi[this.$route.query.messagi]) {
        this.$messagi(messagi[this.$route.query.messagi])
      }

    },
    data: () => {
      return {
        email: '',
        password: ''
      }
    },
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }

        const formData = {
          email: this.email,
          password: this.password
        }

        try {
          await this.$store.dispatch('login', formData);
          this.$router.push('/');
        } catch (e) {
          console.log(e)
        }

      }
    }
  }
</script>
