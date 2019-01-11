import vehicleClassTransformer from '../vehicle-class';

describe('vehicleClassTransformer', () => {
  test('transforms correctly', () => {
    expect(vehicleClassTransformer('ABC1234')).toEqual('ABC123');
  });
});
