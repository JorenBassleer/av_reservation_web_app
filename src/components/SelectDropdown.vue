<template>
        <select @change="clickedOnRow(rowId)">
        <option v-for="row in data" 
                    :value="row.id"
                    :key="row.id">{{ row.name }}</option>
    </select>
</template>
<script>
export default {
    props: ["data"],
    setup(props, {emit}) {
        const clickedOnRow = (rowId) => {
            emit('clickedOnRow', rowId);
        }
        return { clickedOnRow }
    },
}
</script>
<style scoped>
select, option {
    border: none;
    outline: inherit;
    padding: 10px;
    width: 260px;
    border-radius: 8px;
    text-align: center;
}
</style>