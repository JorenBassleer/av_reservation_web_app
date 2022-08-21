<template>
    <h1>Apparaten</h1>
    <div class="content">
        <div class="filter">
            <div v-if="brands.length" class="brands">
                <strong @click="toggle('brands')">Merken: (toggle)</strong>
                <ul v-if="showBrands">
                    <li v-for="brand in brands" :key="brand.id" 
                                                :class="{ isActive: brandNameFilter == brand.name}"
                                                @click="brandNameFilter = brand.name">
                        <span>{{ brand.name }}</span>
                    </li>
                </ul>
            </div>

            <div v-if="types.length" class="types">
                <strong @click="toggle('types')">Soorten: (toggle)</strong>
                <ul v-if="showTypes">
                    <li v-for="kind in types" :key="kind.id" 
                                              :class="{ isActive: typeNameFilter == kind.name}"
                                              @click="typeNameFilter = kind.name">
                        <span>{{ kind.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="add-appliance">
                <div>
                     <router-link :to="{name: 'create-appliance'}">
                        <button>Voeg apparaat toe:</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="search-bar">
            <input type="text" v-model="applianceNameFilter" placeholder="Zoek een apparaat:" />
        </div>
        <div class="filter-delete" v-if="typeNameFilter || brandNameFilter">
            <div class="filter-info">
                <strong>Active filters: {{typeNameFilter}} {{brandNameFilter}}</strong>
            </div>
            <div class="delete-btn">
                <button @click="typeNameFilter = ''; brandNameFilter = ''">Delete filters</button>
            </div>
        </div>
        <div v-if="appliances.length" class="appliances-container">
            <div v-for="appliance in appliances" :key="appliance.id">
                <Appliance :appliance="appliance" />
            </div>
        </div>
        <!-- <nav>
            <ul>
                <li :class="{disabled: !pagination.prev_page_url}"><a href="#"
                @click="fetchProducts(pagination.prev_page_url)">Previous</a></li>

                <li><a href="#">Page {{pagination.current_page}} of {{pagination.last_page}}</a></li>

                <li :class="{disabled: !pagination.next_page_url}"><a href="#"
                @click="fetchProducts(pagination.next_page_url)">Next</a></li>
            </ul>
        </nav> -->
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Appliance from '../../components/appliances/Appliance.vue';

export default {
    components: { Appliance },

    setup() {
        const showBrands = ref(false);
        const showTypes = ref(false);
        const brandNameFilter = ref('');
        const typeNameFilter = ref('');
        const applianceNameFilter = ref('');
        const store = useStore();

        const appliances = computed(() => {
            let brandFilteredApp = filter(store.state.appliances,"brand",brandNameFilter.value);
            let typeFilteredApp = filter(brandFilteredApp, "type", typeNameFilter.value);
            return filter(typeFilteredApp, "applianceName", applianceNameFilter.value);
        });

        const brands = computed(() => store.state.brands);
        const types = computed(() => store.state.types);

        const filter = (collectionToFilter, filterSubject, filterGiven) => {
            let filteredCollection = collectionToFilter.filter((singleRow) => {
                if(filterSubject == "brand") {
                    return singleRow.brand.name.includes(filterGiven);
                }
                else if(filterSubject == "type"){
                    return singleRow.type.name.includes(filterGiven);
                }
                else if(filterSubject == "applianceName") {
                    return singleRow.name.toLowerCase().includes(filterGiven.toLowerCase());
                }
            });
            return filteredCollection;
        }
        const toggle = (itemToToggle) => {
            if(itemToToggle == "brands") {
                showBrands.value = !showBrands.value; 
            }
            if(itemToToggle == "types") {
                showTypes.value = !showTypes.value;
            }
        }
        return { appliances, brands, types, 
                brandNameFilter, typeNameFilter, applianceNameFilter,
                showBrands, showTypes,
                toggle }

    }
}
</script>
<style scoped>
.content {
    margin: 0 auto;
    width: 60%;
}
.appliances-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 0;
}
.filter, .filter-delete .delete-btn, .filter-delete .filter-info, .search-bar {
    display: flex;
    margin-left: 30px;
}
.filter-delete .delete-btn button, .add-appliance button {
    cursor: pointer;
    font: inherit;
    border: none;
    outline: inherit;
    color: #e1dcce;
    margin: auto 0px;
    border-radius: 8px;
    padding: 10px;
    background: #473f2b;
}
.filter-info {
    margin: 10px 0;
}
.add-appliance {
    margin-left: 450px;
}
.search-bar {
    margin-top: 10px;
    margin-left: 20px;
}
.search-bar input {
    border: none;
    outline: inherit;
    padding: 10px;
    width: 260px;
    border-radius: 8px;
}
.brands, .types {
    margin: 0 5px;
    padding: 5px;
    text-align: start;
}
.brands strong, .types strong {
    cursor: pointer;
}
.brands ul, .types ul{
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
}
.brands li, .types li {
    border-radius: 8px;
    cursor: pointer;
    padding: 2px;
}
.brands li:hover, .types li:hover {
    padding: 5px 2px;
    background: #e1dcce;
}
.isActive {
    padding: 5px 2px;
    background: #aca89d;
}
</style>