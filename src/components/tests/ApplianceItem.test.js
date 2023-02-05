/**
 * @vitest-environment
 */
import { mount, RouterLinkStub } from '@vue/test-utils';
import { createStore } from 'vuex';
import {
  expect, describe, it, beforeEach, vi,
} from 'vitest';
import ApplianceItem from '../appliances/ApplianceItem.vue';

describe('ApplianceItem.vue', () => {
  let store;
  let wrapper;
  const mockedBrandNameFunc = vi.fn().mockReturnValue({ name: 'test-brand' });
  const mockedTypeNameFunc = vi.fn().mockReturnValue({ name: 'test-type' });
  beforeEach(() => {
    vi.resetAllMocks();
    store = createStore({
      state: {
        brands: [
          { _id: 1, name: 'brand-1' },
          { _id: 2, name: 'brand-2' },
          { _id: 3, name: 'brand-3' },
        ],
        types: [
          { _id: 1, name: 'type-1' },
          { _id: 2, name: 'type-2' },
          { _id: 3, name: 'type-3' },
        ],
      },
      getters: {
        findBrandById() {
          return mockedBrandNameFunc;
        },
        findTypeById() {
          return mockedTypeNameFunc;
        },
      },
    });
    wrapper = mount(ApplianceItem, {
      props: {
        appliance: {
          _id: '1561',
          name: 'test-appliance',
          brand: 1,
          type: 2,
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
    expect(wrapper.findComponent(RouterLinkStub).props().to.name).toBe(
      'view-appliance',
    );
    expect(wrapper.findComponent(RouterLinkStub).props().to.params.id).toBe(
      '1561',
    );
  });
  it('Check brand and type getters', () => {
    // Brand
    expect(mockedBrandNameFunc).toBeCalled();
    expect(mockedBrandNameFunc).toHaveBeenCalledWith(1);
    // Type
    expect(mockedTypeNameFunc).toBeCalled();
    expect(mockedTypeNameFunc).toHaveBeenCalledWith(2);
  });
  it('Check if DOM has appliance name', () => {
    expect(wrapper.html()).toContain('test-appliance');
  });
});
