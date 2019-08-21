<template>
  <div>
    <h1>Sign Up</h1>
    <input type="text" name="username" v-model="username" placeholder="username">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import authService from '@/services/authService';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async signup() {
      const response = await authService.signup({
        username: this.username,
        password: this.password
      });
      console.log(response.data);
    }
  }
}
</script>

<style scoped>

</style>
