<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(category, index) in categories"
      :key="index"
    >
      <v-expansion-panel-header>{{category}}</v-expansion-panel-header>
      <v-expansion-panel-content v-for="timetableitem in timetableitems" :key="timetableitem.idtimetable_item">
        <v-banner single-line 
        v-if="timetableitem.category === index">
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
            >fas fa-plus</v-icon>
          </template>
        </v-banner>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import itemsService from '../services/itemsService'
import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState([
        'isUserSignedIn'
      ])
    },
    data() {
      return {
        categories: {
          'bus': 'Bus lines',
          'boat': 'Boat lines'
        },
        timetableitems: null
      }
    },
    async mounted() {
      this.timetableitems = (await itemsService.fetchTimetableItems()).data;
    }
  }
</script>

<style scoped>
  span {
    padding-left: 30px;
    padding-right: 30px;
    font-weight: bold;
    color: #858585;
  }
</style>
