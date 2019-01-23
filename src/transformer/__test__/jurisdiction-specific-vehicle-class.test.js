import jurisdictionSpecificVehicleClass from '../jurisdiction-specific-vehicle-class';

describe('jurisdictionSpecificVehicleClass', () => {
  test('works correctly', () => {
    const expected = 'ABCDEF';

    expect(jurisdictionSpecificVehicleClass('ABCDEFG')).toEqual(expected);
  });
});
