/**
 * @vitest-environment
 */
import { mount } from '@vue/test-utils';
import { describe, it } from "vitest";
import Appliance from '../appliances/appliance.vue';

test('mount component', async () => {
    expect(Appliance).toBeTruthy();
		const wrapper = mount(Appliance, {
			props: {
				appliance: {
					id: 'random string',
					name: 'unit test',
					brand: {
						name: 'brand test name',
					},
					type: {
						name: 'type test name',
					},
				}
			}
		});
		// expect(wrapper.props('appliance')).toBe('random string');
		expect(wrapper.vm.appliance.id).toBe('random string');
});