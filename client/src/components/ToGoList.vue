<template>
  <div>
      <h1>TO GO list</h1>

      <v-banner single-line 
        v-for="item in items">
          <v-layout align-center justify-space-around row fill-height>
            <span>{{timetableitem.company}}</span>
            <span>{{timetableitem.destination}}</span>
            <span>Departure: {{timetableitem.departure}}</span>
            <span>Arrival: {{timetableitem.arrival}}</span>
            <span>Price: {{timetableitem.price}}</span>
            
          </v-layout>
          <template v-slot:actions>
            <v-icon color="#3dbf4c" class="icon add"
              v-if="isUserSignedIn"
              @click="addtogo(timetableitem.idtimetable_item)"
            >fas fa-plus</v-icon>
          </template>
        </v-banner>
  </div>
</template>

<script>
import togoService from '../services/togoService';

  export default {
    data() {
        return {
            user: this.$store.state.user.username,
            items: null,
            timetableitems: null
        }
    },
    async mounted() {
        this.items = (await togoService.showItems(this.user)).data;
        this.timetableitems = (await togoService.showTimetableItems(this.user)).data;
    }
  }
</script>

<style scoped>

</style>