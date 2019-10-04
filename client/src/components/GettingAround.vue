<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(category, index) in categories"
      :key="index"
    >
      <v-expansion-panel-header>{{category}}</v-expansion-panel-header>
      <v-expansion-panel-content
        v-for="item in items" :key="item.id">
          <v-card
            v-if="item.category === index"
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text"
              height="200px"
              :src="item.picture"
            >
              <v-card-title class="align-end fill-height card-title">{{item.name}}</v-card-title>
            </v-img>

            <v-card-text>
              {{item.description_text}}
            </v-card-text>

            <v-card-actions>
              <v-icon
                color="#0c0e87"
                class="icon"
                @click="navigateTo({
                  name: 'viewitem',
                  params: {
                    idItem: item.id
                  }
                })">
                fas fa-info-circle</v-icon>
              <v-icon color="#3dbf4c" class="icon add"
              v-if="isUserSignedIn"
              @click="addtogo(item.id)"
              >fas fa-plus</v-icon>
            </v-card-actions>
          </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import {mapState} from 'vuex';

import itemsService from '../services/itemsService';
import togoService from '../services/togoService';

export default {
  computed: {
    ...mapState([
      'isUserSignedIn'
    ])
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
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async addtogo(idItem) {
        try {
          const response = (await togoService.addItem(idItem)).data;
          alert(response.message);
        }
        catch(error) {
          alert(error.response.data.error);
        }
    }
  }
}
</script>

<style scoped>
  .card-title {
    font-weight: bold;
    color: #f53636;
  }

  .icon {
    padding: 10px;
  }
  
  .add {
    padding-left: 0px;
  }

  .avg {
    color: gray;
    font-weight: bold;
    font-size: 1.4em;
    padding-right: 10px;
  }
</style>
