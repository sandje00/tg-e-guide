<template>
    <v-banner single-line v-show="visible">
          <span>{{item.Item.name}}</span>

          <template v-slot:actions>
            <v-icon
              color="#0c0e87"
              @click="navigateTo({
                name: 'viewitem',
                params: {
                  idItem: item.idItem
                }
              })">
              fas fa-info-circle</v-icon>
            <v-icon
              color="#f53636"
              @click="deleteItem(item.idItem)">
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
        navigateTo(route) {
            this.$router.push(route);
        },
        async deleteItem(id) {
            await togoService.deleteItem(id)
                .then(() => {
                    this.visible = false;
                    this.$store.dispatch('deleteItem', id);
                })
                .catch(error => {
                    alert(error.response.data.error);
                });
        }
    },
    props: {
        item: {
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
