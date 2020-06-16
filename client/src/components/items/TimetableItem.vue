<template>
    <v-banner single-line>
          <v-layout align-center justify-space-around row fill-height>
            <span>{{timetableitem.company}}</span>
            <span>{{timetableitem.destination}}</span>
            <span>Departure: {{timetableitem.departure}}</span>
            <span>Arrival: {{timetableitem.arrival}}</span>
            <span>Price: {{timetableitem.price}}</span>
          </v-layout>
            <template v-slot:actions>
              <div v-if="isUserSignedIn">
                <v-icon color="#f53636"
                v-if="isTimetableAdded(timetableitem.id)"
                @click="deleteItem(timetableitem.id)">
                    fas fa-trash-alt
                </v-icon>
                <v-icon color="#3dbf4c" class="icon add" v-else
                @click="addTogo(timetableitem.id)">
                    fas fa-plus
                </v-icon>
              </div>
            </template>
    </v-banner>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

import togoService from '../../services/togoService';

export default {
    computed: {
      ...mapState([ 'isUserSignedIn' ]),
      ...mapGetters([ 'isTimetableAdded' ])
    },
    methods: {
      async addTogo(id) {
        await togoService.addTimetableItem(id)
          .then(() => {
            this.$store.dispatch('addTimetable', id);
          })
          .catch(err => alert(err.response.data.error));
      },
      async deleteItem(id) {
        await togoService.deleteTimetableItem(id)
          .then(() => {
            this.$store.dispatch('deleteTimetable', id);
          })
          .catch(error => {
            alert(error.response.data.error);
          });
      }
    },
    props: {
        timetableitem: {
            type: Object
        }
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
