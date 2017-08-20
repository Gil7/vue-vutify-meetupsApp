<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-title>
                        <h3>Sign up</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignUp">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                        name="email" 
                                        label="E-mail"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                        name="password" 
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                        name="confirmPassword" 
                                        label="Conform Password"
                                        id="confirmPassword"
                                        v-model="confirmPassword"
                                        type="password"
                                        required
                                        :rules="[comparePasswords]"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" class="primary">
                                            Sign up
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'Passwords do not match' : true
        }
    },
    methods: {
        onSignUp () {
            console.log({email: this.email, password:this.password, confirm:this.confirmPassword})
        }
    }
}
</script>

<style>
  
</style>
