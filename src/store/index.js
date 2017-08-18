import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tuxtla_Gutierrez_vista_de_Noche.jpg', 
                id: 'asdakjhsa', 
                title: 'Meetup on NY',
                date: '2017-07-17'
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Catedral_de_San_Crist%C3%B3bal_de_las_Casas_1.jpg', 
                id: 'asqwqeapa', 
                title: 'Meetup San cristobal',
                date: '2017-07-19'
            }
        ],
        user: {
            id: 'lkajsldkjasdq',
            registeredMeetups: ['asqwqeapa']
        }
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
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
        }
        //reach out to firebase and store it
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
        }
    }
})