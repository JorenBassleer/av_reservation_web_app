/**
 * @vitest-environment
 */
import { mount } from '@vue/test-utils';
import { describe, it } from "vitest";
import AddToReservationBtn from '../AddToReservationBtn.vue';

describe('Add to reservation BTN test', () => {
    it('should render', () => {
        const wrapper = mount(AddToReservationBtn);
    });
});