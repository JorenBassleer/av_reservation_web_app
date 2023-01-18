// import { mount } from '@vue/test-utils';
// import { describe, it, vi } from "vitest";
// import Vuex from 'vuex';
// import AddToReservationBtn from '../AddToReservationBtn.vue';

// const localeVue = createLocaleVue();

// localeVue.use(Vuex);

// describe('AddToReservationBtn.vue', () => {
//   let addToReservationBtn;
//   beforeEach(() => {
//     vi.actionClick();
//   })
//   const store = new Vuex.store({
//     actions
//   });

//   it('commit pushApplianceInReservation when button is pressed', () => {
//     const wrapper = mount(AddToReservationBtn, {
//       propsData: {
//         appliance: {
//           name: 'test-appliance',
//         },
//       }
//     });
//     const btn = wrapper.find('button');
//     const appliance = {};
//     btn.trigger('click', { appliance});
    
//   });
// });