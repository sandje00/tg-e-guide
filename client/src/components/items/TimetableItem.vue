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
                <v-icon color="#3dbf4c" class="icon add"
                v-if="isUserSignedIn"
                @click="addtogo(timetableitem.id)"
                >fas fa-plus</v-icon>
            </template>
    </v-banner>
</template>

<script>
import {mapState} from 'vuex';

import togoService from '../../services/togoService';

export default {
    computed: {
      ...mapState([
        'isUserSignedIn'
      ])
    },
    methods: {
        async addtogo(idItem) {
            try {
                const response = (await togoService.addTimetableItem(idItem)).data;
                alert(response.message);
            }
            catch(error) {
                alert(error.response.data.error);
            }
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
