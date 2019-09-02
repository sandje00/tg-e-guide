<template>
  <div>
      <h1>{{item.name}}</h1>

      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col>
            <v-layout align-center justify-start column fill-height>
                <v-img width="400px" :src="item.picture"></v-img>
            </v-layout>
          </v-col>
          <v-col>
            <span class="highlight">Description:</span>
            <p>{{item.description_text}}</p>
            <span class="highlight">View more link:</span>
            <br>
            <a :href="item.view_more_link">{{item.view_more_link}}</a>
          </v-col>
        </v-row>
      </v-container>

      <br>
      <br>
      <v-layout 
        align-center justify-center row fill-height
        v-if="isUserSignedIn"
      >
        <RateDialog />
      </v-layout>

      <br>
      <Ratings />
  </div>
</template>

<script>
import {mapState} from 'vuex';

import itemsService from '../services/itemsService';
import Ratings from './Ratings';
import RateDialog from './RateDialog';

export default {
  components: {
    Ratings,
    RateDialog
  },
  computed: {
    ...mapState([
      'isUserSignedIn'
    ])
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
  .star {
    padding-right: 2px;
  }

  .avg {
    color: gray;
    font-weight: bold;
    font-size: 1.8em;
  }

  .highlight {
    color: #858585;
    font-weight: bold;
    font-size: 1.5em;
  }

  a {
    font-size: 1.2em;
  }
</style>