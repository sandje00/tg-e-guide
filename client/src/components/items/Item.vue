<template>
    <v-card
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
                    fas fa-info-circle
            </v-icon>
            <div v-if="isUserSignedIn">
                <v-icon color="#f53636"
                v-if="isItemAdded(item.id)"
                @click="deleteItem(item.id)">
                    fas fa-trash-alt
                </v-icon>
                <v-icon color="#3dbf4c" class="icon add" v-else
                @click="addTogo(item.id)">
                    fas fa-plus
                </v-icon>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

import togoService from '../../services/togoService';

export default {
    computed: {
        ...mapState([ 'isUserSignedIn' ]),
        ...mapGetters([ 'isItemAdded' ])
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        async addTogo(id) {
            await togoService.addItem(id)
                .then(() => {
                    this.$store.dispatch('addItem', id);
                })
                .catch(err => alert(err.response.data.error));
        },
        async deleteItem(id) {
            await togoService.deleteItem(id)
                .then(() => {
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
