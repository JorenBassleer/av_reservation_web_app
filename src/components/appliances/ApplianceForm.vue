<template>
    <div class="appliance">
        <form @submit.prevent="handleSubmit(appliance)">
            <div class="main-info">
                <div class="error" v-if="error">
                    {{error}}
                </div>
                <div class="appliance-label">
                    <div>
                        <label for="appliance_name">Apparaat naam:</label>
                    </div>
                </div>
                <div class="appliance-input">
                    <input type="text" class="" name="appliance_name" v-model="appliance.name" required><br>
                </div>
                <div class="appliance-label">
                    <label for="appliance_details">Details:</label>
                </div>
                <div class="appliance-input">
                    <textarea type="textarea" class="" name="appliance_details" v-model="appliance.details" required> </textarea>
                </div>
            </div>
            <div class="type-brand">
                <div class="brands">
                    <div class="appliance-label">
                        <label for="brands">Selecteer een merk:</label>
                    </div>
                    <div class="appliance-select">
                        <SelectDropdown @clickedOnRow="clickedOnRow" :data="brands" :type="'brands'" />
                    </div>
                </div>
                <div class="types">
                    <div class="appliance-label">
                        <label for="types">Selecteer een type:</label>
                    </div>
                    <div class="appliance-select">
                        <SelectDropdown @clickedOnRow="clickedOnRow" :data="types" :type="'types'" />
                    </div>
                </div>
            </div>
            <div class="side-info">
                <div class="urls">
                    <div class="appliance-label">
                        <div>
                            <label for="appliance_img_url">foto url:</label>
                        </div>
                    </div>
                    <div class="appliance-input">
                        <input type="text" class="" name="appliance_img_url" v-model="appliance.img_url"><br>
                    </div>
                    <div class="appliance-label">
                        <div>
                            <label for="appliance_manual_url">handleiding url:</label>
                        </div>
                    </div>
                    <div class="appliance-input">
                        <input type="text" class="" name="appliance_manual_url" v-model="appliance.manual_url"><br>
                    </div>
                </div>
                <div class="storage-amount">
                    <div class="appliance-label">
                            <label for="appliance_storage">Voorraad:</label>
                    </div>
                    <div class="appliance-input">
                        <input type="number" name="appliance_storage" id="" v-model="appliance.storage" min="0">
                    </div>
                </div>
            </div>
            <div>
                <button>{{ !isProcessingReq ? 'Slaag op' : 'Versturen...'}}</button>
            </div>
        </form>
    </div>
</template>
<script>
import { computed, ref } from 'vue';    
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import SelectDropdown from '../SelectDropdown.vue';
import axios from 'axios';
import baseAPIUrl from '../../composables/globals.js';
// import PostAppliance from '../../composables/appliances/PostAppliance.js';

export default {
    components: { SelectDropdown },
    setup() {
        const store = useStore();
        const router = useRouter();
        const appliance = ref({
            name: '',
            details: '',
            brand_id: '',
            type_id: '',
            storage: '0',
            manual_url: '',
            img_url: ''
        });
        const isProcessingReq = ref(false);
        const error = ref(null);
        
        const brands = computed(() => store.state.brands);
        const types = computed(() => store.state.types);
        
        const clickedOnRow = ({rowId, type}) => {
            if(checkIfIdIsBrands(type)) {
                appliance.value.brand_id = rowId;
            }
            // Id = type_id
            else {
                appliance.value.type_id = rowId;
            }
        }
        const checkIfIdIsBrands = (type) => {
            return type == 'brands' ? true : false;
        }

        const handleSubmit = async () => {
            isProcessingReq.value = true;
            let newAppliance;
            await axios.post(baseAPIUrl + 'appliances', appliance.value)
            .then(async (response) => {
                newAppliance = response.data.data;
                await store.dispatch('getAppliances');
                router.push({name: 'view-appliance', params: {id: newAppliance.id}});
            })
            .catch((err) => {
                error.value = err;
            });
        }
            // const { newAppliance, newError, load } = PostAppliance();

            // await load(appliance.value);

            // if(!newError) {
            //     // dispatch
            //     store.dispatch('getAppliances');
            //     //router push
            //     router.push({name: 'view-appliance', params: {id: newAppliance.id}});
            // }
            // error.value = newError.value;
        return { appliance, brands, types, isProcessingReq, error,
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
.error {
    color: red;
}
button {
    cursor: pointer;
    font: inherit;
    border: none;
    outline: inherit;
    font-size: 20px;
    color: #e1dcce;
    margin: 15px 0px;
    border-radius: 8px;
    padding: 10px;
    background: #473f2b;
}
</style>