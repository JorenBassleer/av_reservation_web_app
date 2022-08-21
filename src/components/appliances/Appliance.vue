<template>
    <div class="appliance-container">
        <router-link :to="{name: 'view-appliance', params: { id: appliance.id }}">
            <div class="appliance-header">
                <div class="appliance-name">
                    <h2>{{ appliance.name }}</h2>
                </div>
            </div>
        </router-link>
        <div class="appliance-add-to-cart">
            <AddToCart :appliance="appliance"/>
        </div>
        <router-link :to="{name: 'view-appliance', params: { id: appliance.id }}">
            <div class="brand">
                <div>
                    <strong>Merk: </strong>{{ appliance.brand.name}}
                </div>
            </div>
            <div class="type">
                <div>
                    <strong>Type: </strong>{{appliance.type.name}}
                </div>
            </div>
            <div class="appliance-img">
                <img :src="appliance.img_url" :alt="appliance.name" />
            </div>
        </router-link>
    </div>
</template>
<script>
import AddToCart from '../AddToCart.vue';

export default {
    props: ['appliance'],
    components: { AddToCart },
    setup() {
        
    },
}
</script>
<style scoped>
a, h2 {
    text-decoration: none;
    color: black;
}
.appliance-container {
    z-index: -800000;
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
