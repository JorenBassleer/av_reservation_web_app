import { shallowMount } from '@vue/test-utils';
import {
  expect, describe, it, beforeEach,
} from 'vitest';
import SelectDropdown from '../SelectDropdown.vue';

describe('SelectDropdown.vue', () => {
  let wrapper;
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(SelectDropdown, {
      props: {
        data: [],
        type: 'typeName',
      },
    });
  });
  it('Emit row id with prop.type', () => {
    // Act
    wrapper.vm.clickedOnRow(1);
    wrapper.vm.$nextTick(() => {
    // Assert
      expect(wrapper.emitted().clickedOnRow[0]).toEqual([
        {
          rowId: 1,
          type: 'typeName',
        },
      ]);
    });
  });
});
