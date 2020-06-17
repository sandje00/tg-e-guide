<template>
  <div>
    <br>
    <br>

    <h1>Home</h1>

    <br>

    <v-carousel cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <br>
    <br>
    <br>
    <p class="text">A UNESCO World Heritage Site, the Little Venice of Dalmatia or as some call it The Stone Beauty – Trogir 
                and its surrounding area featuring island Čiovo. The islet where Trogir is located lies in a narrow sea passage 
                between the mainland and Čiovo. The islet itself is just 500 m long and 250 m wide. The highest point is the tower
                of Saint Lawrence Cathedral at just 47m. It is in close vicinity with the airport and city of Split, and its cultural 
                heritage combined with nautical its importance has made Trogir one a deservedly well visited destination.</p>  

    <br>

    <p class="text">Trogir presents a good example of well-preserved Romanesque-Gothic islet town. It has long lasting urbanistic 
                consistency which goes all way to its Hellenic heritage with its octagonal city shape. During different periods 
                of rule it was redesigned according to the architectural trends of the time, ranging from Romanesque and Gothic 
                to Renaissance and Baroque. UNESCO recognised its value in 1997 and listed Trogir as a World Heritage Site. Trogir 
                is sometimes called a city-museum because of its rich cultural heritage and intact authentic architecture. In order 
                to celebrate its Medieval heritage, Trogir has in last few years started to organise an annual Medieval fair.</p>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { src: 'https://cdn.tourcms.com/a/11676/730/1/default.jpg' },
          { src: 'https://www.croatianvillas.com/wp-content/uploads/trogir-overviews.jpg' },
          { src: 'https://simplesail.com/images/1920w/1/assets/images/content/Routes/HRV/Trogir/ssl-routes-hrv-trogir-01.jpg' },
          { src: 'https://i1.wp.com/svitforyou.com/wp-content/uploads/2017/10/promo-1.jpg?fit=4128%2C3096' },
          { src: 'https://photohound.co/images/1001476l.jpg' }
        ],
      }
    }
  }
</script>


<style scoped>
  .text {
    font-size: 1.2em;
    text-align: justify;
  }
</style>
