<template> 
  <TheNavBar />
  <router-view/>
  <TheFooter />
</template>
<script>
import { onBeforeMount } from '@vue/runtime-core';
import store from './store/index.js';
import TheNavBar from './layouts/TheNavBar.vue';
import TheFooter from './layouts/TheFooter.vue';

export default {
  components: { TheNavBar, TheFooter },
  setup() {
    onBeforeMount(() => {
        store.dispatch('getAppliances')
            .then(_ =>{})
            .catch((error) => console.log(error));
        store.dispatch('getBrands')
            .then(_ =>{})
            .catch((error) => console.log(error));
        store.dispatch('getTypes')
            .then(_ =>{})
            .catch((error) => console.log(error));
    })
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(233,206,154);
  background: linear-gradient(90deg, rgba(233,206,154,1) 0%, rgba(243,178,47,1) 100%);
}
body {
  margin: 0;
  min-height: 100%;
}
</style>
