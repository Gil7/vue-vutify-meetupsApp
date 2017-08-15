<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                src="https://upload.wikimedia.org/wikipedia/commons/3/30/Catedral_de_San_Crist%C3%B3bal_de_las_Casas_1.jpg"
                                height="120px">
                                    
                                </v-card-media>
                            </v-flex>
                            <v-flex  xs7 sm8 md9>
                                 <v-card-title primary-title>
                                    <div>
                                        <h5 class="white--text mb-0">
                                        My Meetup
                                    </h5>
                                    <div>
                                        17th July 2017
                                    </div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="/meetup/12">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Meetup :)
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
  
</style>
