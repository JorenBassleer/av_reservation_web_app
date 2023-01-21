import store from '../../store';
import axios from 'axios';
import baseAPIUrl from '../../composables/globals.js';
import { vi } from 'vitest';
import { flushPromises } from '@vue/test-utils';

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
    expect(store.state.reservation.amounts).toHaveLength(1);
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
    expect(store.state.brands).toHaveLength(1);
  });
  it('action getAppliances', async () => {
    // Arrange
    const mockAppliancesList = {
      data:{
        data: [
          { id: 1, name: 'test-appliance-1'},
          { id: 2, name: 'test-appliance-2'},
        ]
      }
    };
    vi.spyOn(axios, 'get').mockReturnValue(mockAppliancesList);
    // Act
    await store.dispatch('getAppliances');
    // Assert
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(baseAPIUrl + 'appliances');
  });
  it('action getBrands', async () => {
    // Arrange
    const mockBrandsList = {
      data: {
        data: [
          { id: 1, name: 'brand-name-1' },
          { id: 2, name: 'brand-name-2' }
        ],
      },
    };
    vi.spyOn(axios, 'get').mockReturnValue(mockBrandsList);
    // Act
    await store.dispatch('getBrands');
    // Assert
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(baseAPIUrl + 'brands');
  });
  it('action getTypes', async () => {
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
    expect(axiosSpy).toHaveBeenCalledWith(baseAPIUrl + 'types');
  });
});