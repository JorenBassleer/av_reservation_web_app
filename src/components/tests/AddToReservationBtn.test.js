import { describe, it, vi } from "vitest";
import { createStore } from 'vuex';
import { mount } from '@vue/test-utils'
import AddToReservationBtn from '../AddToReservationBtn.vue';

describe('AddToReservationBtn.vue', () => {
  let wrapper;
  const mutations = {
    pushApplianceInReservation: vi.fn(),
  }
  const mockStore = createStore({
    modules: {
      myModule: {
        namespaced: true,
        mutations,
      },
    },
  })
  wrapper = mount(AddToReservationBtn, {
    global: {
      plugins: [mockStore],
    },
    props: {
      appliance: {
        name: 'test-appliance',
      },
    }
  });
  it('addToReservation func gets called', () => {
    const spy = vi.spyOn(wrapper.vm, 'addToReservation')
    wrapper.find('button').trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});