<template>
        <select @change="clickedOnRow(rowId)" v-model="rowId">
        <option v-for="row in data" 
                    :value="row.id"
                    :key="row.id">{{ row.name }}</option>
    </select>
</template>
<script>
import {  ref } from 'vue';

export default {
    props: ["data", "type"],
    setup(props, {emit}) {
        const rowId = ref(0);
        const clickedOnRow = (rowId) => {
            emit('clickedOnRow', {
                rowId: rowId,
                type: props.type
            });
        }
        return { rowId, clickedOnRow }
    },
}
</script>
<style scoped>
select, option {
    border: none;
    outline: inherit;
    padding: 10px;
    width: 280px;
    border-radius: 8px;
    text-align: center;
}
</style>