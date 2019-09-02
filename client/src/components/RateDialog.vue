<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">Rate</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Rate</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col>
                <v-row>
                    <v-combobox
                        v-model="select"
                        :items="items"
                        label="Select a grade (mandatory)"
                    ></v-combobox>
                </v-row>
                <v-row>
                    <v-textarea
                        v-model="comment"
                        label="Your comment (optional)">
                    ></v-textarea>
                </v-row>
            </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn @click="dialog = false">Close</v-btn>
          <v-btn @click="addrating()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ratingsService from '../services/ratingsService';

  export default {
    data() {
        return {
            dialog: false,
            select: 1,
            items: [1, 2, 3, 4, 5],
            comment: ''
        }
    },
    methods: {
        async addrating() {
            try {
                await ratingsService.addRating({
                    grade: this.select,
                    comment_text: this.comment,
                    UserUsername: this.$store.state.user.username,
                    ItemIdItem: this.$store.state.route.params.idItem
                });
                this.dialog = false;
                alert('Rating added successfully.');
            }
            catch(err) {
                alert(err);
            }
        }
    }
  }
</script>

<style scoped>

</style>
