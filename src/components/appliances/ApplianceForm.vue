<template>
    <div class="appliance">
        <form @click.prevent="handleSubmit(appliance)">
            <div class="main-info">
                <div class="appliance-label">
                    <div>
                        <label for="appliance_name">Apparaat naam:</label>
                    </div>
                </div>
                <div class="appliance-input">
                    <input type="text" class="" name="appliance_name" v-model="appliance.name"><br>
                </div>
                <div class="appliance-label">
                    <label for="appliance_details">Details:</label>
                </div>
                <div class="appliance-input">
                    <textarea type="textarea" class="" name="appliance_details" v-model="appliance.details"> </textarea>
                </div>
            </div>
            <div class="type-brand">
                <div class="brands">
                    <div class="appliance-label">
                        <label for="brands">Selecteer een merk:</label>
                    </div>
                    <div class="appliance-select">
                        <SelectDropdown @clickedOnRow="clickedOnRow(value)" :data="brands" />
                    </div>
                </div>
                <div class="types">
                    <div class="appliance-label">
                        <label for="types">Selecteer een type:</label>
                    </div>
                    <div class="appliance-select">
                        <SelectDropdown @clickedOnRow="clickedOnRow(value)" :data="types"  />
                    </div>
                </div>
            </div>
            <div class="side-info">
                <div class="urls">

                </div>
                <div class="defect-amount">

                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import SelectDropdown from '../SelectDropdown.vue';

export default {
    components: { SelectDropdown },
    setup() {
        const store = useStore();
        const appliance = ref({
            name: '',
            details: '',
            brand_id: '',
            type_id: '',
            storage: '',
            manual_url: '',
            img_url: ''
        });

      const brands = computed(() => store.state.brands);
      const types = computed(() => store.state.types);

      const clickedOnRow = (value) => {
        console.log(value);
      }
      const handleSubmit = (appliance) => {

      }
      return { appliance, brands, types,
            handleSubmit, clickedOnRow }
    },
}
</script>
<style scoped>
input, textarea {
    border: none;
    outline: inherit;
    padding: 10px;
    width: 260px;
    border-radius: 8px;
}
.main-info {
    display: flex;
    flex-direction: column;
}
.appliance-label {
    margin: 10px auto;
}
</style>