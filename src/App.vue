<template>
  <TheNavBar />
  <router-view v-slot="{ Component, route }">
    <transition
      name="route"
      mode="out-in"
    >
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
  <TheFooter />
</template>
<script setup>
import { onBeforeMount } from 'vue';
import store from './store/index.js';
import TheNavBar from './layouts/TheNavBar.vue';
import TheFooter from './layouts/TheFooter.vue';

onBeforeMount(() => {
  store.dispatch('getAppliances')
    .then((_) => {})
    .catch((error) => console.log(error));
  store.dispatch('getBrands')
    .then((_) => {})
    .catch((error) => console.log(error));
  store.dispatch('getTypes')
    .then((_) => {})
    .catch((error) => console.log(error));
});
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

/* page animations */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
