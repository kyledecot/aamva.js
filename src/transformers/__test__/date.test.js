import transformer from '../date'

describe('date', () => {
  describe('when U.S.', () => {
    test('works correctly', () => {
      const date = new Date('2018', '01', '01')
      const country = 'U.S.'

      expect(transformer(date, country).toEqual('01012018')
    })
  });

  describe('when Canada', () => {
    test('works correctly', () => {
      const date = new Date('2018', '01', '01')
      const country = 'Canada'

      expect(transformer(date, country)).toEqual('2018-01-01')
    })
  })

  describe('when neither Canada or U.S.', () => {
    test('throws an error', () => {
      const date = new Date('2018', '01', '01')
      const country = 'Malaysia'

      expect(() => {
        expect(transformer(date, country)).toEqual('2018-01-01')
      }).toThrowError('Invalid country Malaysia.')
    })
  })
})
