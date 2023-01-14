/**
 * @vitest-environment
 */
import { describe, it } from "vitest";
import Appliance from '../appliances/appliance.vue';

describe('Appliance test', () => {
    it('should render', () => {
        const wrapper = mount(Appliance);
    });
});