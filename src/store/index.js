import { createStore } from 'vuex';
import baseAPIUrl from '../composables/globals.js';
import axios from 'axios';

export default createStore({
  state: {
    appliances: [],
    brands: [],
    types: [],
    reservation: {
      appliances: [],
      amounts: [],
    }
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
    reservation(state) {
      return state.reservation;
    },
    getTotalAmountOfAppliancesInReservation(state, getters) {
      let totalAmount = 0;
      for(let i = 0; i < state.reservation.amounts.length; i++) {
        totalAmount += state.reservation.amounts[i];
      }

      return totalAmount;
    }
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
    },
    pushApplianceInReservation(state, appliance) {
      // Check if appliances is already in reservation
      let applianceInReservationIndex = state.reservation.appliances.findIndex(item => item.name == appliance.name);
      if(applianceInReservationIndex != -1) {
          // Appliance is in reservation -> ++ amount
          state.reservation.amounts[applianceInReservationIndex]++;
          return
      }
      // Appliance not yet in reservation set amount-> 1 
      state.reservation.amounts.push(1);
      state.reservation.appliances.push(appliance);
    }
  },
  actions: {
    async getAppliances ({ commit }) {
        // Fetch all appliances and add to state
        try {
          const response = await axios.get(baseAPIUrl + 'appliances');
          commit('updateAppliances', response.data.data[0]);
        } catch (error) {
          console.log(error);
        }
    },
    async getBrands({ commit }) {
        // Fetch all brands and add to state
        try {
          const response = await axios.get(baseAPIUrl + 'brands');
          commit('updateBrands', response.data.data[0]);
        } catch (error) {
          console.log(error);
        }
    },
    async getTypes({ commit }) {
        // Fetch all types and add to state
        try {
          const response = await axios.get(baseAPIUrl + 'types');
          commit('updateTypes', response.data.data[0]);
        } catch (error) {
          console.log(error);
        };
    }
  },
  modules: {
  }
})
