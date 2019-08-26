<template>
  <div>
    <h1>Sign Up</h1>
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

                <div class="error" v-html="error" />

                <v-btn @click="signup">
                  Sign Up
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
    async signup() {
      try {
        const response = await authService.signup({
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
  .form-input {
    width: 400px;  
  }
  .error {
    color: red;
  }
</style>
