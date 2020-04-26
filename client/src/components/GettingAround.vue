<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(category, index) in categories"
      :key="index"
    >
      <v-expansion-panel-header>{{category}}</v-expansion-panel-header>
      <v-expansion-panel-content
        v-for="item in items" :key="item.id">
          <Item
            v-if="item.category === index"
            v-bind:item="item"
          />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import itemsService from '../services/itemsService';
import Item from './items/Item';

export default {
  components: {
    Item
  },
  data() {
    return {
      categories: {
        'historicalsite': 'Historical sites',
        'museum': 'Museums',
        'restaurant': 'Restaurants',
        'accomodation': 'Accomodation',
        'nearbyplace': 'Nearby places'
      },
      items: null
    }
  },
  async mounted() {
    this.items = (await itemsService.fetchItems()).data;
  }
}
</script>
