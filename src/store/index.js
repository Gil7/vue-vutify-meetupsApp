import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        setLoadedMeetups (state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) { 
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        loadMeetups ({commit}) { 
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
            .then( (data) => {
                const meetups = []
                const obj = data.val()
                for(let key in obj){
                    meetups.push({
                        id: key,
                        title: obj[key].title,
                        description: obj[key].description,
                        imageUrl: obj[key].imageUrl,
                        date: obj[key].date,
                        creatorId: obj[key].creatorId
                    })
                }
                commit('setLoading', false)
                commit('setLoadedMeetups', meetups)

            })
            .catch(error => {
                console.log(error)
                commit('setLoading', true)
            })
        },
        createMeetup ({commit, getters}, payload) {
            const meetup = {
                title: payload.title,
                description: payload.description,
                imageUrl: payload.imageUrl,
                location: payload.location,
                date: payload.date.toISOString(),
                creatorId: getters.user.id
            }
            console.log(meetup)
            firebase.database().ref('meetups').push(meetup)
            .then( data => {
                const key = data.key

                console.log(data)
                commit('createMeetup', {
                    ...meetup,
                    id : key
                })
                
            })
            .catch( error => {
                console.log(error)
            })
        },
        //reach out to firebase and store it
        signUserUp ({commit},payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then( user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.uid,
                    loadedMeetups: []
                }
                commit('setUser', payload)
            })
            .catch( error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
                console.log(error.message)
            })
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.uid,
                    loadedMeetups: []
                }
                commit('setUser', payload)
            }).catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
        },
        autoSignIn ({ commit }, payload) {
            commit('setUser', {id: payload.uid, registeredMeetups: []})
        },
        logout ({commit}){
            firebase.auth().signOut()
            commit('setUser',null)
            store.push('/')
        },
        clearError ({commit}) {
            commit('clearError')
        },
        setLoading({commit}, payload) {
            commit('setLoading', payload)
        }
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0,5)   
        },
        loadedMeetup (state){
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user (state) {
            return state.user
        },
        error (state) {
            return state.error
        },
        loading (state) {
            return state.loading
        }
    }
})