import axios from 'axios';
import {
  expect, describe, it, vi,
} from 'vitest';
import store from '../../store';
import baseAPIUrl from '../../composables/globals';

describe('Vuex store', () => {
  // MUTATIONS
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
    expect(store.state.reservation.amounts).toHaveLength(1);
    expect(store.state.reservation.appliances).toEqual(
      expect.arrayContaining([expect.objectContaining(initAppliance)]),
    );
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
    expect(store.state.appliances).toEqual(
      expect.arrayContaining([expect.objectContaining(initAppliance)]),
    );
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
    expect(store.state.brands).toEqual(
      expect.arrayContaining([expect.objectContaining(initBrand)]),
    );
  });
  it('mutation updateTypes', () => {
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
    expect(store.state.types).toHaveLength(1);
    expect(store.state.types).toEqual(
      expect.arrayContaining([expect.objectContaining(initType)]),
    );
  });
  // ACTIONS
  it('action getAppliances', async () => {
    // Arrange
    const mockAppliancesList = {
      data: {
        data: [
          { id: 1, name: 'test-appliance-1' },
          { id: 2, name: 'test-appliance-2' },
        ],
      },
    };
    vi.spyOn(axios, 'get').mockReturnValue(mockAppliancesList);
    // Act
    await store.dispatch('getAppliances');
    // Assert
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${baseAPIUrl}appliance`);
  });
  it('action getBrands succeeds', async () => {
    // Arrange
    const mockBrandsList = {
      data: {
        data: [
          { id: 1, name: 'brand-name-1' },
          { id: 2, name: 'brand-name-2' },
        ],
      },
    };
    vi.spyOn(axios, 'get').mockReturnValue(mockBrandsList);
    // Act
    await store.dispatch('getBrands');
    // Assert
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${baseAPIUrl}brand`);
  });
  it('action getBrands fails', async () => {
    expect.assertions(1);
    // Arrange
    vi.spyOn(axios, 'get').mockRejectedValue('test');
    // Act
    try {
      await store.dispatch('getBrands');
    } catch (error) {
      // Assert
      expect(error.message).toBe('test');
    }
  });
  it('action getTypes succeeds', async () => {
    // Arrange
    const mockTypesList = {
      data: {
        data: [
          { id: 1, name: 'type-name-1' },
          { id: 2, name: 'type-name-2' },
        ],
      },
    };
    const axiosSpy = vi.spyOn(axios, 'get').mockReturnValue(mockTypesList);
    // Act
    await store.dispatch('getTypes');
    // Assert
    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(axiosSpy).toHaveBeenCalledWith(`${baseAPIUrl}type`);
  });
  it('action getTypes fails', async () => {
    expect.assertions(1);
    // Arrange
    vi.spyOn(axios, 'get').mockRejectedValue('test');
    // Act
    try {
      await store.dispatch('getTypes');
    } catch (error) {
      // Assert
      expect(error.message).toBe('test');
    }
  });
  // GETTERS
  it('getter appliances', () => {
    // Arrange
    const initAppliances = [
      { id: 1, name: 'appliance-name-1' },
      { id: 2, name: 'appliance-name-2' },
      { id: 3, name: 'appliance-name-3' },
      { id: 4, name: 'appliance-name-4' },
    ];
    store.state.appliances = initAppliances;
    // Act
    const result = store.getters.appliances;
    // Assert
    expect(result).to.deep.equal(initAppliances);
  });
  it('getter brands', () => {
    // Arrange
    const initBrands = [
      { id: 1, name: 'brand-name-1' },
      { id: 2, name: 'brand-name-2' },
      { id: 3, name: 'brand-name-3' },
      { id: 4, name: 'brand-name-4' },
    ];
    store.state.brands = initBrands;
    // Act
    const result = store.getters.brands;
    // Assert
    expect(result).to.deep.equal(initBrands);
  });
  it('getter types', () => {
    // Arrange
    const initTypes = [
      { id: 1, name: 'types-name-1' },
      { id: 2, name: 'types-name-2' },
      { id: 3, name: 'types-name-3' },
      { id: 4, name: 'types-name-4' },
    ];
    store.state.types = initTypes;
    // Act
    const result = store.getters.types;
    // Assert
    expect(result).to.deep.equal(initTypes);
  });
  it('getter reservation', () => {
    // Arrange
    const initReservation = {
      appliances: [
        { id: 1, name: 'appliance-name-1' },
        { id: 2, name: 'appliance-name-2' },
        { id: 3, name: 'appliance-name-3' },
      ],
      amounts: [
        5,
        2,
        3,
      ],
    };
    store.state.reservation = initReservation;
    // Act
    const result = store.getters.reservation;
    // Assert
    expect(result).to.deep.equal(initReservation);
  });
  it('getter getTotalAmountOfAppliancesInReservation', () => {
    // Arrange
    const initReservation = {
      appliances: [
        { id: 1, name: 'appliance-name-1' },
        { id: 2, name: 'appliance-name-2' },
        { id: 3, name: 'appliance-name-3' },
      ],
      amounts: [
        5,
        2,
        3,
      ],
    };
    store.state.reservation = initReservation;
    // Act
    const result = store.getters.getTotalAmountOfAppliancesInReservation;
    // Assert
    expect(result).toBe(10);
  });
});
