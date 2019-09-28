<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        Trogir eGuide
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <hide-at breakpoint="small">
        <v-toolbar-items>
          <v-btn text :to="{ name: 'home' }">
            Home
          </v-btn>
          <v-btn text :to="{ name: 'gettingaround' }">
            Getting around
          </v-btn>
          <v-btn text :to="{ name: 'transportation' }">
            Transportation
          </v-btn>
          <v-btn v-if="isUserSignedIn" text :to="{ name: 'togolist' }">
            TO GO list
          </v-btn>
          <v-btn v-if="!isUserSignedIn" text :to="{ name: 'signin' }">
            Sign In
          </v-btn>
          <v-btn v-if="!isUserSignedIn" text :to="{ name: 'signup' }">
            Sign Up
          </v-btn>
          <v-btn v-if="isUserSignedIn" text @click="signout">
            Sign Out
          </v-btn>
        </v-toolbar-items>
      </hide-at>

      <show-at breakpoint="small">
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">fas fa-bars</v-icon>
            </template>

            <v-list>
              <v-list-item :to="{ name: 'home' }">
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item :to="{ name: 'gettingaround' }">
                <v-list-item-title>Getting around</v-list-item-title>
              </v-list-item>

              <v-list-item :to="{ name: 'transportation' }">
                <v-list-item-title>Transportation</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="isUserSignedIn" :to="{ name: 'togolist' }">
                <v-list-item-title>TO GO list</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="!isUserSignedIn" text :to="{ name: 'signin' }">
                <v-list-item-title>Sign In</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="!isUserSignedIn" text :to="{ name: 'signup' }">
                <v-list-item-title>Sign Up</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="isUserSignedIn" text @click="signout">
                <v-list-item-title>Sign Out</v-list-item-title>
              </v-list-item>
            </v-list>

          </v-menu>
        </div>
      </show-at>
      
    </v-toolbar>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {showAt, hideAt} from 'vue-breakpoints';

  export default {
    components: { 
      hideAt,
      showAt
    },
    computed: {
      ...mapState([
        'isUserSignedIn'
      ])
    },
    methods: {
      signout () {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', null);
        this.$router.push({
          name: 'home'
        });
      }
    }
  }
</script>