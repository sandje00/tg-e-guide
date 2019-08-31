<template>
  <v-container class="grey lighten-5"
        v-if="ratings">
        <v-row no-gutters>
          <v-col>
            
          </v-col>
          <v-col>
              <span class="highlight">Ratings</span>
              <v-card
                max-width="500"
                class="mx-auto"
                v-for="rating in ratings" :key="rating.idRating"
              >
                <v-card-title>
                  <span>{{rating.UserUsername}}: </span>
                  <v-icon 
                    color="#ffb300" class="star"
                    v-for="(star, i) in rating.grade" :key="i">
                    fas fa-star
                    </v-icon>
                </v-card-title>

                <v-card-text class="comment">{{rating.comment_text}}</v-card-text>
                
              </v-card>
          </v-col>
          <v-col>
            
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import ratingsService from '../services/ratingsService';

  export default {
    data() {
        return {
            idItem: this.$store.state.route.params.idItem,
            ratings: null
        }
    },
    async mounted() {
      this.ratings = (await ratingsService.fetchRatings(this.idItem)).data;
    }
  }
</script>

<style scoped>
  .star {
    padding-right: 2px;
  }

  .highlight {
        color: #858585;
        font-weight: bold;
        font-size: 1.5em;
  }

  .comment {
    font-size: 1.2em
  }
</style>