<template>
  <div>
      <h1>TO GO list</h1>

      <v-banner single-line 
        v-for="item in items"
        :key="item.ItemIdItem">

          <span>{{item.Item.name}}</span>

          <template v-slot:actions>
            <v-icon
              color="#0c0e87"
              @click="navigateTo({
                name: 'viewitem',
                params: {
                  idItem: item.Item.idItem
                }
              })">
              fas fa-info-circle</v-icon>
            <v-icon
              color="#f53636"
              @click="deleteItem(item.id)">
              fas fa-trash-alt</v-icon>
          </template>
        </v-banner>

        <br>
        <br>

        <v-banner single-line 
          v-for="timetableitem in timetableitems"
          :key="timetableitem.TimetableItemIdtimetableItem">

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
                @click="deleteTimetableItem(timetableitem.id)">
                fas fa-trash-alt</v-icon>
            </template>
        </v-banner>
  </div>
</template>

<script>
import togoService from '../services/togoService';

  export default {
    data() {
        return {
            items: null,
            timetableitems: null
        }
    },
    async mounted() {
      try {
        this.items = (await togoService.showItems()).data;
        this.timetableitems = (await togoService.showTimetableItems()).data;
      }
      catch(err) {
        alert(err);
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      async deleteItem(useritem) {
        try {
          await togoService.deleteItem(useritem);
        }
        catch(error) {
          alert(error.response.data.error);
        }
      },
      async deleteTimetableItem(usertimetableitem) {
        try {
          await togoService.deleteTimetableItem(usertimetableitem);
        }
        catch(error) {
          alert(error.response.data.error);
        }
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