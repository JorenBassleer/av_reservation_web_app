<template>
  <div class="create-appliance-content">
    <div class="create-appliance-header">
      <h1>Voeg een apparaat toe:</h1>
    </div>
    <div class="create-appliance-form">
      <ApplianceForm />
    </div>
  </div>
</template>
<script setup>
import ApplianceForm from '../../components/appliances/ApplianceForm.vue';

</script>
<style scoped>
.create-appliance-content {
    flex-basis: auto;
    align-items: center;
    background: #f1eee8;
    padding: 15px;
    box-shadow: 0 8px 8px -4px;
}
.create-appliance-content, .create-appliance-header, .create-appliance-form {
    margin: 20px auto;
    width: 60%;
    border-radius: 8px;
}
.create-appliance-header {
    display: flex;
    justify-content: center;
    justify-items: center;
    background: #cfcdc7;
    height: 100px;
}
.create-appliance-form {
    background: #e4e2db;
    padding: 15px;
}
</style>
