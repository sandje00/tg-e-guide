<template>
  <div>
      <h1>TO GO list</h1>
        <Item 
          v-for="item in items"
          :key="item.idItem"
          v-bind:item="item"
        />
        <br>
        <br>
        <TimetableItem 
          v-for="timetableitem in timetableitems"
          :key="timetableitem.idItem"
          v-bind:timetableitem="timetableitem"
        />
  </div>
</template>

<script>
import togoService from '../services/togoService';
import Item from './items/ToGoItem';
import TimetableItem from './items/ToGoTimetable';

export default {
  components: {
    Item,
    TimetableItem
  },
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
  }
}
</script>
