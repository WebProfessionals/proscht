import Vue from 'vue'
import Vuex from 'vuex'

const fb = require('./helpers/firebaseConfig')

Vue.use(Vuex)

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
  }
})

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    currentGame: null
  },
  actions: {

  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    },
    setCurrentGame (state, val) {
      state.currentGame = val
    }
  }
})
