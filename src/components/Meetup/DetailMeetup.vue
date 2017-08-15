<template>
  <v-container>
      <v-layout row wrap>
          <v-flex>
              <v-card>
                  <v-card-title>
                      <h6>
                          {{$route.params.id}}
                      </h6>
                  </v-card-title>
                  <v-card-media
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/Catedral_de_San_Crist%C3%B3bal_de_las_Casas_1.jpg"
                  height="400px">
                  </v-card-media>
                  <v-card-text>
                      <div class="info--text">17th July 2017- where it takes places</div>
                      <div>
                          lorem kas dlahdlkas hdlkashd lasd
                          ad ahlkjd hsalkjdhaslkd hsadl
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
