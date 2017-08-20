<template>
  <v-container>
      <v-layout row wrap>
          <v-flex>
              <v-card>
                  <v-card-title>
                      <h6>
                          {{meetup.title}}
                      </h6>
                  </v-card-title>
                  <v-card-media
                  :src="meetup.imageUrl"
                  height="400px">
                  </v-card-media>
                  <v-card-text>
                      <div class="info--text"> {{meetup.date | date}}- where it takes places</div>
                      <div>
                          {{meetup.description}}
                      </div>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn class="primary">
                              <v-icon dark>
                                add
                              </v-icon>
                              Register
                          </v-btn>
                      </v-card-actions>
                  </v-card-text>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
    export default {
        props: ['id'],
        computed : {
            meetup () {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>