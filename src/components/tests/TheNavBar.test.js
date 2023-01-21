/**
 * @vitest-environment
 */
import { mount, RouterLinkStub  } from '@vue/test-utils';
import { createStore } from 'vuex';
import { vi } from 'vitest';
import TheNavBar from '../../layouts/TheNavBar.vue';

describe('Appliance.vue', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = createStore();
    wrapper = mount(TheNavBar, {
      global: {
        plugins: [store],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });
  it('Test home router-link', () => {
    expect(wrapper.findAllComponents(RouterLinkStub)[0].props().to).toBe('/');
  });
  it('Test apparaten router-link', () => {
    expect(wrapper.findAllComponents(RouterLinkStub)[1].props().to).toBe('/apparaten');
  });
  it('Test mijn reservatie router-link', () => {
    expect(wrapper.findAllComponents(RouterLinkStub)[2].props().to).toBe('/mijn-reservatie');
  });
  it('#appliances-number has total amount of appliances in reservation', () => {
    let wrapper = mount(TheNavBar, {
      global: {
        computed: { amountOfAppliances: 60 },
        plugins: [store],
        stubs: { RouterLink: RouterLinkStub },
      },
    });
    const applianceNumberSpan = wrapper.find('#appliances-number');
    if (expect(applianceNumberSpan.find('span').exists()).toBe(true)) {
      console.log('here');
      expect(applianceNumberSpan.text()).toBe(60);
    }
  });
});
