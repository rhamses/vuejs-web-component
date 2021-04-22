import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState({
    key: 'wc-one'
  })],
  state: {
    name: '',
    state: ''
  },
  mutations: {
    mutName (state, data) {
      state.name = data;
    },
    mutState (state, data) {
      state.state = data;
    }
  },
  getters:{
    name(state) {
      return state.name;
    },
    state(state) {
      return state.state;
    }
  }
})


export default store