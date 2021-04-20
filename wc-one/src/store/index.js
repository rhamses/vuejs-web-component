import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
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