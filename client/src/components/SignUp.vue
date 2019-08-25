<template>
  <div>
    <h1>Sign Up</h1>
    <input type="text" name="username" v-model="username" placeholder="username">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <div class="error" v-html="error" />
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import authService from '@/services/authService';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async signup() {
      try {
        /* response =  */await authService.signup({
        username: this.username,
        hpwd: this.password
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      }
      catch(error) {
        this.error = error.response.data.error;
      }
    }
  }
}
</script>

<style scoped>
  .success {
    color: green;
  }

  .error {
    color: red;
  }
</style>
