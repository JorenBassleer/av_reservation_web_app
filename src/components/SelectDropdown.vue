<template>
  <select
    v-model="rowId"
    @change="clickedOnRow(rowId)"
  >
    <option
      v-for="row in data"
      :key="row.id"
      :value="row.id"
    >
      {{ row.name }}
    </option>
  </select>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  data: {
    type: [Object, Array],
    required: true,
  },
  type: {
    type: [Object, String],
    required: true,
  },
});
const emit = defineEmits(['clickedOnRow']);
const rowId = ref(0);
const clickedOnRow = (clickedId) => {
  emit('clickedOnRow', {
    clickedId,
    type: props.type,
  });
};
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
