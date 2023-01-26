/**
 * @vitest-environment
 */
import { mount, RouterLinkStub } from '@vue/test-utils';
import { createStore } from 'vuex';
import {
  expect, describe, it, beforeEach,
} from 'vitest';
import ApplianceItem from '../appliances/ApplianceItem.vue';

describe('ApplianceItem.vue', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = createStore();
    wrapper = mount(ApplianceItem, {
      props: {
        appliance: {
          id: '1561',
          name: 'test-appliance',
          brand: {
            name: 'test-brand',
          },
          type: {
            name: 'test-type',
          },
        },
      },
      global: {
        plugins: [store],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });
  it('Check links to appliance', () => {
    // Assert
    expect(wrapper.findComponent(RouterLinkStub).props().to.name).toBe('view-appliance');
    expect(wrapper.findComponent(RouterLinkStub).props().to.params.id).toBe('1561');
  });
  it('Check if DOM has property values', () => {
    expect(wrapper.html()).toContain('test-appliance');
    expect(wrapper.html()).toContain('test-brand');
    expect(wrapper.html()).toContain('test-type');
  });
});
