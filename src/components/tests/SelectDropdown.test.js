import { shallowMount } from '@vue/test-utils';
import { describe, it } from "vitest";
import SelectDropdown from '../SelectDropdown.vue';

describe('SelectDropdown.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SelectDropdown, {
      props: {
        type: 'typeName',
      },
    });
  });
  it('Emit row id with prop.type', (done) => {
    wrapper.vm.clickedOnRow(1);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted().clickedOnRow[0]).toEqual([
        {
          rowId: 1,
          type: 'typeName',
        }
      ]);
    })
  });
});