import {
  describe, it, beforeEach, vi, expect,
} from 'vitest';
import { shallowMount } from '@vue/test-utils';
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
    store = createStore();
    router = useRouter();
    wrapper = shallowMount(ApplianceForm, {
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
    console.log('data val: ', await nameInput.setValue(testAppliance.data.data[0].name));
    await detailsInput.setValue(testAppliance.data.data[0].details);
    await imgUrlInput.setValue(testAppliance.data.data[0].img_url);
    await storageInput.setValue(testAppliance.data.data[0].storage);
    const axiosSpy = vi.spyOn(axios, 'post').mockReturnValue(testAppliance);
    const fnSpy = vi.spyOn(wrapper.vm, 'handleSubmit');
    // Act
    console.log('wrapper find: ', storageInput.text());
    await wrapper.find('button').trigger('click');
    // Assert
    expect(fnSpy).toHaveBeenCalledTimes(1);
    expect(axiosSpy).toHaveBeenCalledTimes(1);
  });
  // Test failed form submit
});
