import { createStore } from 'vuex';
import baseAPIUrl from '../composables/globals.js';
import axios from 'axios';

export default createStore({
  state: {
    appliances: [],
    brands: [],
    types: []
  },
  getters: {
    appliances(state) {
      return state.appliances;
    },
    brands(state) {
      return state.brands;
    },
    types(state) {
      return state.types;
    },
  },
  mutations: {
    updateAppliances(state, appliances) {
      state.appliances = appliances;
    },
    updateBrands(state, brands) {
        state.brands = brands;
    },
    updateTypes(state, types) {
        state.types = types;
    }
  },
  actions: {
    getAppliances ({commit}) {
        // Fetch all appliances and add to state
        axios.get(baseAPIUrl + 'appliances')
        .then((response) => {
            commit('updateAppliances', response.data.data[0]);
        })
        .catch((error) => console.log(error));
    },
    getBrands({commit}) {
        // Fetch all brands and add to state
        axios.get(baseAPIUrl + 'brands')
        .then((response) => {
            commit('updateBrands', response.data.data[0]);
        })
        .catch((error) => console.log(error));
    },
    getTypes({commit}) {
        axios.get(baseAPIUrl + 'types')
        .then((response) => {
            commit('updateTypes', response.data.data[0]);
        })
        .catch((error) => console.log(error));
    },
    getRequest(dataWanted) {
      axios.get(baseAPIUrl + dataWanted)
      .then((response) => {
        return response.data.data[0];
      })
      .catch((error) => console.log(error));
    }
  },
  modules: {
  }
})
