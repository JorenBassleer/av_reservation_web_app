<template>
  <div class="content">
    <div class="appliance-container">
      <div class="appliance-heading">
        <h1>{{ appliance.name }}</h1>
        <strong>Merk: </strong> {{ store.getters.findBrandById(appliance.brand)?.name || 'Geen merk naam'}}
        <strong>Type: </strong> {{ store.getters.findTypeById(appliance.type)?.name || 'Geen type naam' }}
      </div>
      <div class="appliance-body">
        <div class="left-side">
          <div class="appliance-img">
            <img
              :src="appliance.img_url"
              :alt="appliance.name"
            >
          </div>
        </div>
        <div class="right-side">
          <div class="appliance-description">
            <strong>Beschrijving: </strong>{{ appliance.details }}
          </div>
          <div class="appliance-manual">
            <a
              href="{{appliance.manual_url}}"
              target="_blank"
            >Bekijk hier de handleiding van {{ appliance.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const store = useStore();
const router = useRoute();

const appliance = computed(() => store.state.appliances.find((single) => single._id === router.params.id));

</script>
<style scoped>
.content {
  height: 100vh;
}
.appliance-container {
  height: 80%;
  width: 80%;
  align-items: center;
  background: #f1eee8;
  margin: 20px auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 8px 8px -4px;
}
.appliance-heading,
h1 {
  background: #e7e3d8;
  border-radius: 8px;
  padding: 5px;
  width: 80%;
  margin: 10px auto;
}
.appliance-body {
  background: #e7e3d8;
  display: flex;
  padding: 5px;
  border-radius: 8px;
  height: 60%;
  margin: 0px 5px;
}
.left-side,
.right-side {
  margin-top: 20px;
  width: 50%;
}
.right-side {
  text-align: left;
}
.appliance-img img {
  border-radius: 8px;
  box-shadow: 0 8px 4px -4px;
}
.appliance-manual,
.appliance-description {
  margin: 10px 0;
}
.appliance-description strong {
  font-size: 20px;
}
</style>
