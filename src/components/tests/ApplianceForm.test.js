import {
  describe, it, beforeEach, vi, expect,
} from 'vitest';
import { mount } from '@vue/test-utils';
import axios from 'axios';
import { createStore } from 'vuex';
import { useRouter } from 'vue-router';
import ApplianceForm from '../appliances/ApplianceForm.vue';
import baseAPIUrl from '../../composables/globals';

describe('ApplianceForm.vue', () => {
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
        },
      ],
    },
  };
  let store;
  let wrapper;
  let router;
  const mockRoute = {
    name: 'view-appliance',
    params: {
      id: testAppliance.data.data[0].id,
    },
  };
  const mockRouter = {
    push: vi.fn(),
  };
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
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
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
    // Set id's since they are not inputs
    wrapper.vm.appliance.brand_id = testAppliance.data.data[0].brand_id;
    wrapper.vm.appliance.type_id = testAppliance.data.data[0].type_id;
    vi.spyOn(axios, 'post').mockReturnValue(testAppliance);
    const submitSpy = vi.spyOn(wrapper.vm, 'handleSubmit');
    // Act
    await wrapper.find('button').trigger('click');
    wrapper.vm.$nextTick(() => {
      // Assert
      expect(submitSpy).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(`${baseAPIUrl}appliances`, testAppliance);
      // Check if store dispatch getAppliances gets called
      expect(store.actions.getAppliance()).toHaveBeenCalledTimes(1);
      // Check if router get pushed
      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
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
});
