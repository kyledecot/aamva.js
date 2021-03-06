import heightTransformer from '../height';

describe('heightTransformer', () => {
  describe('when in`', () => {
    test('transforms correctly', () => {
      expect(heightTransformer(70, { unit: 'in' })).toEqual('070 in');
    });
  });

  describe('when cm`', () => {
    test('transforms correctly', () => {
      expect(heightTransformer(99, { unit: 'cm' })).toEqual('099 cm');
    });
  });

  describe('when neither in or cm', () => {
    test('throws an error', () => {
      expect(() => heightTransformer(123, { unit: 'foobar' })).toThrowError('Unsupported Unit of Measurement: foobar');
    });
  });
});
