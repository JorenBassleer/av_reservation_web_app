import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import {
  expect, describe, it, beforeEach, vi,
} from 'vitest';
import AddToReservationBtn from '../../components/AddToReservationBtn.vue';

describe('AddToReservationBtn.vue', () => {
  // Arrange
  let wrapper;
  let mockStore;
  let mockedIncFn;
  const initReservation = {
    appliances: [],
  };
  const initAppliance = {
    id: '1561',
    name: 'test-appliance',
    brand: {
      name: 'test-brand',
    },
    type: {
      name: 'test-type',
    },
  };
  beforeEach(() => {
    vi.resetAllMocks();
    mockedIncFn = vi.fn();
    mockStore = createStore({
      state: { initReservation },
      mutations: { pushApplianceInReservation: mockedIncFn },
    });
  });
  it('calls pushApplianceInReservation store mutation', async () => {
    wrapper = mount(AddToReservationBtn, {
      global: { plugins: [mockStore] },
      props: { appliance: initAppliance },
    });
    // Act
    wrapper.find('button').trigger('click');
    expect(mockedIncFn).toHaveBeenCalled();
  });
  it('addToReservation func gets called', () => {
    wrapper = mount(AddToReservationBtn, {
      global: { plugins: [mockStore] },
      props: { appliance: initAppliance },
    });
    const spy = vi.spyOn(wrapper.vm, 'addToReservation');
    // Act
    wrapper.find('button').trigger('click');
    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
