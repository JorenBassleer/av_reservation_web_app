<template>
    <div>
        <button class="add-btn" @click.stop="addToReservation(appliance)">Add</button>
    </div>
</template>
<script>
export default {
    props: ['appliance'],
    setup() {
        const addToReservation = (appliance) => {
            console.log("added" + appliance.name);
        }

        return { addToReservation }
    },
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
</style>