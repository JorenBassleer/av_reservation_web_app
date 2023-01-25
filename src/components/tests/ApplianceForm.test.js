import {
  describe, it, beforeEach, vi, expect,
} from 'vitest';
import { mount } from '@vue/test-utils';
import axios from 'axios';
import { createStore } from 'vuex';
import { useRouter } from 'vue-router';
import ApplianceForm from '../appliances/ApplianceForm.vue';

describe('ApplianceForm.vue', () => {
  const testAppliance = {
    data: {
      data: [
        {
          name: 'test-appliance name',
          details: 'test-appliance details',
          brand_id: 1,
          type_id: 2,
          storage: 5,
          img_url: 'google.com',
        },
      ],
    },
  };
  let store;
  let wrapper;
  let router;
  beforeEach(() => {
    store = createStore({
      state: {
        brands: [],
        types: [],
      },
      actions: {
        getAppliances: () => [],
      },
    });
    router = useRouter();
    wrapper = mount(ApplianceForm, {
      global: {
        plugins: [store, router],
      },
    });
  });
  // Test succcessful form submit
  it('Successful form post', async () => {
    // Arrange
    const [nameInput, detailsInput, imgUrlInput, storageInput] = wrapper.findAll('input');
    await nameInput.setValue(testAppliance.data.data[0].name);
    await detailsInput.setValue(testAppliance.data.data[0].details);
    await imgUrlInput.setValue(testAppliance.data.data[0].img_url);
    await storageInput.setValue(testAppliance.data.data[0].storage);
    vi.spyOn(axios, 'post').mockReturnValue(testAppliance);
    // Act
    await wrapper.find('button').trigger('click');
    // Assert
    expect(wrapper.vm.handleSubmit()).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledTimes(1);
    // Check if store dispatch getAppliances gets called
    // Check if router get pushed
  });
  // Test failed form submit
  it('Fail submit sets error val', async () => {
    // Arrange
    expect.assertions(1);
    vi.spyOn(axios, 'post').mockRejectedValue('failed');
    // Act
    await wrapper.vm.handleSubmit();
    wrapper.vm.$nextTick(() => {
      // Assert
      expect(wrapper.vm.error).toBe('failed');
    });
  });
});
