<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Trogir eGuide</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn 
        text
        :to="{
          name: 'home'
        }">
        Home
      </v-btn>
      <v-btn 
        text
        :to="{
          name: 'gettingaround'
        }">
        Getting around
      </v-btn>
      <v-btn 
        text
        :to="{
          name: 'transportation'
        }">
        Transportation
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserSignedIn"
        text
        :to="{
          name: 'signin'
        }">
        Sign In
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserSignedIn"
        text
        :to="{
          name: 'signup'
        }">
        Sign Up
      </v-btn>
      <v-btn 
        v-if="$store.state.isUserSignedIn"
        text
        @click="signout">
        Sign Out
      </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    methods: {
      signout () {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', null);
      }
    }
  }
</script>

<style scoped>

</style>
