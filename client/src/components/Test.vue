<template>
  <div>
      <h1>Kamerlengo fortress</h1>

      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col>
            <v-layout align-center justify-start column fill-height>
                <v-img width="400px" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/65/11/48/fortress-kamerlengo.jpg"></v-img>
                <v-layout align-center justify-center row fill-height>
                    <v-icon color="#ffb300" class="icon star">fas fa-star</v-icon><span class="avg">3.90</span>
                </v-layout>
            </v-layout>
          </v-col>
          <v-col>
            <span class="highlight">Description:</span>
            <p>The Kamerlengo Fortress, raised on the southwestern angle of the islet on which there is the historic center of Trogir, was built from 1420 to 1437, immediately after the Venetian conquering of Trogir. It was built in the shape of an irregular trapezoid with four towers at its angles, of which the oldest and the largest was built earlier, in the 14th century.</p>
            <span class="highlight">View more link:</span>
            <br>
            <a href="https://www.visittrogir.hr/fortresses">https://www.visittrogir.hr/fortresses</a>
          </v-col>
        </v-row>
      </v-container>

      <br>
      <br>
      <v-layout 
        align-center justify-center row fill-height
      >
        <v-btn>Add to "TO GO"</v-btn>
        <v-btn>Rate</v-btn>
      </v-layout>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
    .star {
        padding-right: 2px;
    }

    .avg {
        color: gray;
        font-weight: bold;
        font-size: 1.8em;
    }

    .highlight {
        color: #858585;
        font-weight: bold;
        font-size: 1.5em;
    }

    a {
        font-size: 1.2em;
    }
</style>