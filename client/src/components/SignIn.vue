<template>
  <div>
    <h1>Sign In</h1>
    <input type="text" name="username" v-model="username" placeholder="username">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <div class="error" v-html="error" />
    <button @click="signup">Sign In</button>
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
    async signin() {
      try {
        const response = await authService.signin({
        username: this.username,
        hpwd: this.password
        });
      }
      catch(error) {
        this.error = error.response.data.error;
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
