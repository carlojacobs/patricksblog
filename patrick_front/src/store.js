import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: false
  },
  getters : {
    AUTH: state => {
      return state.auth;
    }
  },
  mutations: {
    SET_AUTH: (state, payload) => {
      state.auth = payload;
    }
  },
  actions : {}  
})