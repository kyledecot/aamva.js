import truncationIndicator from '../truncation-indicator'

describe('truncationIndicator', () => {
  describe('when true', () => {
    test('returns T', () => {
      expect(truncationIndicator(true)).toEqual('T')
    })
  })

  describe('when false', () => {
    test('returns N', () => {
      expect(truncationIndicator(false)).toEqual('N')
    })
  })

  describe('when neither true or false', () => {
    test('returns U', () => {
      expect(truncationIndicator(null)).toEqual('U')
    })
  })
})
