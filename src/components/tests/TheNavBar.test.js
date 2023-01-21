/**
 * @vitest-environment
 */
import { mount, RouterLinkStub  } from '@vue/test-utils';
import { createStore } from 'vuex';
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
});
