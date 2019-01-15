import eyeColorTransformer from '../eye-color';

describe('eyeColorTransformer', () => {
  describe('when eye color is supported', () => {
    test('transforms correctly', () => {
      expect(eyeColorTransformer('Hazel')).toEqual('HAZ');
    });
  });

  describe('when eye color is not supported', () => {
    test('throws an error', () => {
      expect(() => eyeColorTransformer('Clear')).toThrowError('Unsupported Eye Color: Clear');
    });
  });
});
