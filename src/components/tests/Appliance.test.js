/**
 * @vitest-environment
 */
import { mount, RouterLinkStub  } from "@vue/test-utils";
import { describe, it } from "vitest";
import Appliance from "../appliances/appliance.vue";

describe("Appliance.vue", () => {
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
