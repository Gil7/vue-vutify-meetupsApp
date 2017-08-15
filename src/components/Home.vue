<template>
  <v-container>
    <v-layout row wrap >
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups"  class="info">
          Explore Meetups
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">
          Organize a meetup
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-carousel>
        <v-carousel-item 
          v-for="meetup in meetups" 
          :src="meetup.imageUrl" 
          :key="meetup.id">
          <div class="title">
            {{meetup.title}}
          </div>
        </v-carousel-item>
        
      </v-carousel>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <p>
          Join our awesome meetups!
        </p>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        meetups: [
          {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tuxtla_Gutierrez_vista_de_Noche.jpg', id: 'asdakjhsa', title: 'Meetup on NY'},
          {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Catedral_de_San_Crist%C3%B3bal_de_las_Casas_1.jpg', id: 'asqwqeapa', title: 'Meetup San cristobal'}
        ]
      }
    }
  }
</script>
<style scoped>
  .title{
    position: absolute;
    bottom: 50px; 
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;

  }
</style>
