import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tuxtla_Gutierrez_vista_de_Noche.jpg', 
                id: 'asdakjhsa', 
                title: 'Meetup on NY',
                description:'laskjd laksjdl aksjdlasd',
                date: new Date()
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Catedral_de_San_Crist%C3%B3bal_de_las_Casas_1.jpg', 
                id: 'asqwqeapa', 
                description: 'kaskdjhaskdjhakjd  kajs hdk askjd hsad',
                title: 'Meetup San cristobal',
                date: new Date()
            }
        ],
        user: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) { 
            state.user = payload
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                title: payload.title,
                description: payload.description,
                imageUrl: payload.imageUrl,
                location: payload.location,
                date: payload.date,
                id: 'asdaslkdjaslkda'   
            }
            commit('createMeetup', meetup)
        },
        //reach out to firebase and store it
        signUserUp ({commit},payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then( user => {
                const newUser = {
                    id: user.uid,
                    loadedMeetups: []
                }
                commit('setUser', payload)
            })
            .catch( error => {
                console.log(error)
            })
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
        }
    }
})