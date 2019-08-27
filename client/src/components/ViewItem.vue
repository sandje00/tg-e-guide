<template>
  <div></div>
</template>

<script>
import itemsService from '../services/itemsService';

export default {
  async mounted() {
    const idItem = this.$store.state.route.params.idItem;
    const item = (await itemsService.fetchOneItem(idItem)).data;
  }
}
</script>

<style scoped>

</style>