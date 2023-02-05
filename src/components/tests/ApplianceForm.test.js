import {
  describe, it, beforeEach, vi, expect,
} from 'vitest';
import { mount } from '@vue/test-utils';
import axios from 'axios';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '../../router/routes';
// import routes from '../../router/routes';
import ApplianceForm from '../appliances/ApplianceForm.vue';
import baseAPIUrl from '../../composables/globals';

describe('ApplianceForm.vue', async () => {
  const testAppliance = {
    data: {
      data: [
        {
          id: 1,
          name: 'test-appliance name',
          details: 'test-appliance details',
          brand_id: 1,
          type_id: 2,
          storage: 5,
          img_url: 'google.com',
          manual_url: 'hihihi.com',
        },
      ],
    },
  };
  let store;
  let router;
  let wrapper;
  let getAppliancesMock;
  beforeEach(async () => {
    vi.resetAllMocks();
    router = createRouter({
      history: createWebHistory(),
      routes,
    });
    router.push('/');
    await router.isReady();

    getAppliancesMock = vi.fn();
    store = createStore({
      state: {
        brands: [],
        types: [],
      },
      actions: { getAppliances: getAppliancesMock },
    });

    wrapper = mount(ApplianceForm, {
      global: {
        plugins: [store, router],
      },
    });
  });
  // Test succcessful form submit
  it('Successful form post', async () => {
    // Arrange
    const [nameInput, imgUrlInput, manualUrlInput, storageInput] = wrapper.findAll('input');
    const [detailsTextarea] = wrapper.findAll('textarea');
    await nameInput.setValue(testAppliance.data.data[0].name);
    await detailsTextarea.setValue(testAppliance.data.data[0].details);
    await imgUrlInput.setValue(testAppliance.data.data[0].img_url);
    await manualUrlInput.setValue(testAppliance.data.data[0].manual_url);
    await storageInput.setValue(testAppliance.data.data[0].storage);
    // Set id's since they are not inputs
    wrapper.vm.appliance.brand_id = testAppliance.data.data[0].brand_id;
    wrapper.vm.appliance.type_id = testAppliance.data.data[0].type_id;
    wrapper.vm.appliance.id = testAppliance.data.data[0].id;
    const push = vi.spyOn(router, 'push');
    vi.spyOn(axios, 'post').mockReturnValue(testAppliance);
    // Act
    wrapper.find('form').trigger('submit.prevent');
    wrapper.vm.$nextTick(() => {
      // Assert
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        `${baseAPIUrl}appliances`,
        testAppliance.data.data[0],
      );
      // Check if store dispatch getAppliances gets called
      expect(getAppliancesMock).toHaveBeenCalledTimes(1);
      // Check if $router get pushed
      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith({
        name: 'view-appliance',
        params: {
          id: testAppliance.data.data[0].id,
        },
      });
    });
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
  it('clickedOnRow should set right ids', async () => {
    // Arrange
    const emittedBrand = {
      rowId: 1,
      type: 'brands',
    };
    const emittedType = {
      rowId: 2,
      type: 'types',
    };
    // Act
    await wrapper.vm.clickedOnRow(emittedBrand);
    await wrapper.vm.clickedOnRow(emittedType);
    wrapper.vm.$nextTick(() => {
      // Assert
      expect(wrapper.vm.appliance.brand_id).toBe(1);
      expect(wrapper.vm.appliance.type_id).toBe(2);
    });
  });
  it('clickedOnRow receives wrong type', async () => {
    // Arrange
    expect.assertions(1);
    const wrongEmitVal = {
      rowId: 1,
      type: 'wrong type',
    };
    // Act
    await wrapper.vm.clickedOnRow(wrongEmitVal);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.error).toBe('Invalid type');
    });
  });
});
