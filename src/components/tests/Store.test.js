import store from '../../store';
describe('Vuex store', () => {
  it('mutation pushApplianceInReservation', () => {
    // Arrange
    let initAppliance = {
      id: '123',
      name: 'test-appliance',
      brand: {
        name: 'test-brand',
      },
      type: {
        name: 'test-type',
      },
    }
    // Act
    store.commit('pushApplianceInReservation', initAppliance);
    // Assert
    expect(store.state.reservation.appliances).toHaveLength(1);
  });
});