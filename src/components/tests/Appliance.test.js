/**
 * @vitest-environment
 */
import { mount } from "@vue/test-utils";
import { describe, it, vi } from "vitest";
import * as VueRouter from "vue-router";
import Appliance from "../appliances/appliance.vue";

describe("Appliance.vue", () => {
  // vi.mock("vue-router", () => ({
  //   useRoute: vi.fn(),
  //   useRouter: vi.fn(() => ({
  //     push: () => {},
  //   })),
  // }));
  it("Redirects user to appliance page", async () => {
		// Arrange
    const useRouteSpy = vi.spyOn(VueRouter, 'useRoute');
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
    const wrapper = mount(Appliance, {
      props: {
        appliance: initAppliance,
      },
      global: {
				stubs: ['router-link', 'router-view'],
      },
    });
    // Act
		const useRouteMock = useRouteSpy.mockImplementationOnce({ query: 'query' });
		// const useRouteMock = spy.mockImplementationOnce({ params: { id: '1561' }});
    await wrapper.find('div').trigger('click');
		// const spy = vi.spyOn(wrapper.vm,'useRouter');
    // Assert
    expect(useRouteMock).toHaveBeenCalledTimes(1);
    expect(useRouteMock).toHaveBeenCalledWith(`/apparaten/${initAppliance.id}`);
  });
});
