import { describe, it, expect } from 'vitest';
import Appliance from '../../models/appliance';

describe('Appliance model', () => {
  it('New model', () => {
    expect(new Appliance()).toBeInstanceOf(Appliance);
  });
  it('Appliance structure', () => {
    expect(new Appliance()).toEqual({
      $collection: expect.any(Array),
    });
  });
});
