<template>
    <v-banner single-line v-show="visible">
    <v-layout align-center justify-space-around row fill-height>
        <span>{{timetableitem.TimetableItem.company}}</span>
        <span>{{timetableitem.TimetableItem.destination}}</span>
        <span>Departure: {{timetableitem.TimetableItem.departure}}</span>
        <span>Arrival: {{timetableitem.TimetableItem.arrival}}</span>
        <span>Price: {{timetableitem.TimetableItem.price}}</span>
    </v-layout>

    <template v-slot:actions>
        <v-icon
            color="#f53636"
            @click="deleteTimetableItem(timetableitem.idItem)">
            fas fa-trash-alt</v-icon>
    </template>
    </v-banner>
</template>

<script>
import togoService from '../../services/togoService';

export default {
    data() {
        return {
            visible: true
        }
    },
    methods: {
        async deleteTimetableItem(id) {
            await togoService.deleteTimetableItem(id)
                .then(() => {
                    this.visible = false;
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

  .highlight {
    color: #858585;
    font-weight: bold;
    font-size: 1.5em;
  }
</style>
