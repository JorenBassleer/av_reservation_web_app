/**
 * @vitest-environment
 */
import { mount, RouterLinkStub } from '@vue/test-utils';
import { createStore } from 'vuex';
import {
  expect, describe, it, beforeEach,
} from 'vitest';
import TheNavBar from '../../layouts/TheNavBar.vue';

describe('Appliance.vue', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = createStore({
      getters: {
        getTotalAmountOfAppliancesInReservation() { return 60; },
      },
    });
    wrapper = mount(TheNavBar, {
      global: {
        plugins: [store],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });
  it('Test router-links', () => {
    expect(wrapper.findAllComponents(RouterLinkStub)[0].props().to).toBe('/');
    expect(wrapper.findAllComponents(RouterLinkStub)[1].props().to).toBe('/apparaten');
    expect(wrapper.findAllComponents(RouterLinkStub)[2].props().to).toBe('/mijn-reservatie');
  });
  it('Match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('#appliances-number has total amount of appliances in reservation', async () => {
    // Arrange
    // Act
    const applianceNumber = parseInt(wrapper.find('#appliances-number').text(), 10);
    // 60 like we defined in our mock store
    // Assert
    expect(applianceNumber).toBe(60);
  });
});
