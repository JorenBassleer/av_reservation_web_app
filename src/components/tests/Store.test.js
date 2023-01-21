import store from '../../store';
describe('Vuex store', () => {
  it('mutation pushApplianceInReservation', () => {
    // Arrange
    const initAppliance = {
      id: '123',
      name: 'test-appliance',
      brand: {
        name: 'test-brand',
      },
      type: {
        name: 'test-type',
      },
    };
    // Act
    store.commit('pushApplianceInReservation', initAppliance);
    // Assert
    expect(store.state.reservation.appliances).toHaveLength(1);
  });
  it('mutation updateAppliances', () => {
    // Arrange
    const initAppliances = [];
    const initAppliance = {
      id: '123',
      name: 'test-appliance',
      brand: {
        name: 'test-brand',
      },
      type: {
        name: 'test-type',
      },
    };
    initAppliances.push(initAppliance);
    // Act
    store.commit('updateAppliances', initAppliances);
    // Assert
    expect(store.state.appliances).toHaveLength(1);
  });
  it('mutation updateBrands', () => {
    // Arrange
    const initBrands = [];
    const initBrand = {
      id: '123',
      name: 'test-brand',
    };
    initBrands.push(initBrand);
    // Act
    store.commit('updateBrands', initBrands);
    // Assert
    expect(store.state.brands).toHaveLength(1);
  });
  it('mutation updatTypes', () => {
    // Arrange
    const initTypes = [];
    const initType = {
      id: '123',
      name: 'test-type',
    };
    initTypes.push(initType);
    // Act
    store.commit('updateTypes', initTypes);
    // Assert
    expect(store.state.brands).toHaveLength(1);
  });
});