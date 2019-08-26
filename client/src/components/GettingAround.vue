<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(category,i) in categories"
      :key="i"
    >
      <v-expansion-panel-header>{{category}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import itemsService from '../services/itemsService';

export default {
  data() {
    return {
      categories: [
        'Historical sites',
        'Museums',
        'Restaurants',
        'Accomodation',
        'Nearby places'
      ],
      items: null
    }
  },
  async mounted() {
    this.items = await itemsService.getAllItems();
  }
}
</script>

<style scoped>

</style>
