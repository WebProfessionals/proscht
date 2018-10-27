import Vue from 'vue'
import Vuex from 'vuex'

const fb = require('./helpers/firebaseConfig')

Vue.use(Vuex)

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')
  }
})

export const store = new Vuex.Store({
  state: {
    currentUser: null
  },
  actions: {

  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    }
  }
})
