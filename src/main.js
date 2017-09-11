import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCBHEAuByO6i9--4Zkg1czo_zBIYdf_nxE",
      authDomain: "meetups-b5cb2.firebaseapp.com",
      databaseURL: "https://meetups-b5cb2.firebaseio.com",
      projectId: "meetups-b5cb2",
      storageBucket: "gs://meetups-b5cb2.appspot.com",
      messagingSenderId: "608427885575" 
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
