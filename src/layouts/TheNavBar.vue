<template>
    <nav>
        <router-link to="/">HOME</router-link> |
        <router-link to="/apparaten">APPARATEN</router-link> | 
        <router-link to="/mijn-reservatie">MIJN RESERVATIE <span id="appliances-number">{{amountOfAppliances}}</span></router-link>
    </nav>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';  
export default {
    setup() {
        const store = useStore();

        const amountOfAppliances = computed(() => store.getters.getTotalAmountOfAppliancesInReservation);
        
        return { amountOfAppliances }
    },
}
</script>
<style scoped>
nav {
  padding: 30px;
}

nav a {
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
}
nav a:hover {
    text-decoration: underline;
}
nav a.router-link-exact-active {
  color: white;
}
#appliances-number {

}
</style>