<template>
  <div>
    <h1>Sign In</h1>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col>
            
          </v-col>
          <v-col>
            <v-form class="form-input">
                <v-text-field
                  label="username"
                  v-model="username"
                ></v-text-field>

                <v-text-field
                  label="password"
                  :type="'password'"
                  v-model="password"
                ></v-text-field>

                <div class="danger-alert" v-html="error" />

                <v-btn @click="signin">
                  Sign In
                </v-btn>
            </v-form>
          </v-col>
          <v-col>
            
          </v-col>
        </v-row>
      </v-container>
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
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'home'
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
  
</style>
