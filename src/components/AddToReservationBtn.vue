<template>
    <div>
        <button 
            class="add-btn" 
            :class="{animate: disabled}" 
            @click.prevent="addToReservation(appliance)"
        >
        Add
    </button>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';
const props = defineProps({
	appliance: {
		type: Object,
		required: true,
	}
});
const store = useStore();
const disabled = ref(false);
const addToReservation = (appliance) => {
    disabled.value = true;
    setTimeout(() => {
        disabled.value = false;
    }, 1000);
    store.commit('pushApplianceInReservation', appliance);
}
</script>
<style scoped>
.add-btn {
    position: absolute;
    margin-top: -60px;
    margin-left: 175px;
    z-index: 9999999999;
    cursor: pointer;
    font: inherit;
    border: none;
    outline: inherit;
    color: #e1dcce;
    border-radius: 8px;
    padding: 10px;
    background: #473f2b;
}
.animate {
    animation: expand 0.3s cubic-bezier(0.5,0.3,0.4,0.8) both;
}
@keyframes expand {
    50% {
        transform: scale(1.25);
    }

}
</style>