<template>
  <div class="appliance-container">
    <router-link :to="{name: 'view-appliance', params: { id: appliance._id }}">
      <div class="appliance-header">
        <div class="appliance-name">
          <h2>{{ appliance.name }}</h2>
        </div>
      </div>
    </router-link>
    <div class="appliance-add-to-cart">
      <AddToCart :appliance="appliance" />
    </div>
    <router-link :to="{name: 'view-appliance', params: { id: appliance._id }}">
      <div class="brand">
        <div>
          <strong>Merk: </strong>{{ store.getters.findBrandById(appliance.brand).name }}
        </div>
      </div>
      <div class="type">
        <div>
          <strong>Type: </strong>{{ store.getters.findTypeById(appliance.type).name }}
        </div>
      </div>
      <div class="appliance-img">
        <img :alt="appliance.name">
      </div>
    </router-link>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import AddToCart from '../AddToReservationBtn.vue';

defineProps({
  appliance: {
    type: [Object, Array],
    required: true,
  },
});
const store = useStore();
</script>
<style scoped>
a, h2 {
    text-decoration: none;
    color: black;
}
.appliance-container {
    flex-basis: auto;
    align-items: center;
    background: #f1eee8;
    margin: 20px;
    height: 275px;
    width: 250px;
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 8px 8px -4px;
}
.appliance-header {
    display: flex;
}
.appliance-name {
    width: 80%
}
.appliance-add-to-cart {
    width: 20%;
}
.appliance-img {
    background: #bfb496;
    margin: 0 auto;
    padding: 5px;
    height: 125px;
    box-shadow: 0 8px 8px -4px #746846;
    border-radius: 8px;
    margin: 8px 0;
}
.brand, .type {
    font-size: 15px;
    text-align: start;
}
</style>
