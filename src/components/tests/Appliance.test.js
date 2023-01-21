/**
 * @vitest-environment
 */
import { mount, RouterLinkStub  } from "@vue/test-utils";
import { describe, it } from "vitest";
import { createStore } from 'vuex';
import Appliance from "../appliances/appliance.vue";

describe("Appliance.vue", () => {
  let store;
  beforeEach(() => {
    store = createStore();
  });
  it("Check link to appliance", async () => {
		// Arrange
    const wrapper = mount(Appliance, {
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
    // Act
    // Assert
    expect(wrapper.findComponent(RouterLinkStub).props().to.name).toBe('view-appliance');
    expect(wrapper.findComponent(RouterLinkStub).props().to.params.id).toBe('1561');
  });
});
