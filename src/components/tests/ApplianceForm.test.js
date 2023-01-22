import { describe, it, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import { createStore } from 'vuex';
import { useRouter } from 'vue-router';
import ApplianceForm from '../appliances/ApplianceForm.vue';

describe('ApplianceForm.vue', () => {
  const testAppliance = {
    name: '',
    details: '',
    brand_id: '',
    type_id: '',
    storage: '0',
    img_url: '',
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

  });
  // Test failed form submit
});
