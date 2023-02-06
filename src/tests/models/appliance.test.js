import {
  describe, it, expect, vi,
} from 'vitest';
import Appliance from '../../models/appliance';

describe('Appliance model', () => {
  it('New model', () => {
    expect(new Appliance()).toBeInstanceOf(Appliance);
  });
  it('Appliance structure', () => {
    expect(new Appliance()).toEqual(expect.objectContaining({
      $collection: expect.any(Array),
      record: expect.any(Function),
      all: expect.any(Function),
      find: expect.any(Function),
      update: expect.any(Function),
    }));
  });
  describe('record', () => {
    const data = [{ name: 'Test-appiance' }, { name: 'Test-appliance 2' }];
    it('Can add data to the collection', () => {
      const appliance = new Appliance();
      appliance.record(data);
      expect(appliance.$collection).toEqual(data);
    });
    it('Gets called when data is passed to Appliance', () => {
      const spy = vi.spyOn(Appliance.prototype, 'record');
      // eslint-disable-next-line no-unused-vars
      const appliance = new Appliance(data);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(data);
    });
  });
});
