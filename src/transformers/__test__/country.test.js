import countryTransformer from '../country'

describe('date', () => {
  describe('when U.S.', () => {
    test('works correctly', () => {
      expect(countryTransformer('U.S.')).toEqual('USA')
    })
  });

  describe('when Canada', () => {
    test('works correctly', () => {
      expect(countryTransformer('Canada')).toEqual('CAN')
    })
  })

  describe('when neither Canada or U.S.', () => {
    test('throws an error', () => {
      expect(() => countryTransformer('Malaysia')).toThrowError('Unsupported Country: Malaysia')
    })
  })
})
