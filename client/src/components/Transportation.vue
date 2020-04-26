<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(category, index) in categories"
      :key="index"
    >
      <v-expansion-panel-header>{{category}}</v-expansion-panel-header>
      <v-expansion-panel-content v-for="timetableitem in timetableitems" :key="timetableitem.id">
        <TimetableItem
          v-if="timetableitem.category === index"
          v-bind:timetableitem="timetableitem"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import itemsService from '../services/itemsService';

import TimetableItem from './items/TimetableItem';

export default {
  components: {
    TimetableItem
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
