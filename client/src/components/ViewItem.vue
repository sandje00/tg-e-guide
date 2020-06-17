<template>
  <div>
      <br>
      <br>
      <h1>{{item.name}}</h1>
      <br>
      <br>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col>
            <v-layout align-center justify-start column fill-height>
                <v-img width="400px" :src="item.picture"></v-img>
            </v-layout>
          </v-col>
          <v-col>
            <span class="highlight">Description:</span>
            <p class="text">{{item.description_text}}</p>
            <br>
            <span class="highlight">View more link:</span>
            <br>
            <a :href="item.view_more_link">{{item.view_more_link}}</a>
          </v-col>
        </v-row>
      </v-container>

      <br>
      <br>
      <Ratings />
  </div>
</template>

<script>
import itemsService from '../services/itemsService';
import Ratings from './ratings/Ratings';

export default {
  components: {
    Ratings
  },
  data() {
    return {
      item: null,
      ratings: null
    }
  },
  async mounted() {
    const idItem = this.$store.state.route.params.idItem;
    this.item = (await itemsService.fetchOneItem(idItem)).data;
  }
}
</script>

<style scoped>
  .highlight {
    color: #858585;
    font-weight: bold;
    font-size: 1.5em;
  }

  a {
    font-size: 1.2em;
  }

  .text {
    font-size: 1.2em;
    text-align: justify;
  }
</style>
