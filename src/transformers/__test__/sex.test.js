import sexTransformer from '../sex'

describe('sexTransformer', () => {
  describe('when 1', () => {
    test('returns male', () => {
      expect(sexTransformer(1)).toEqual('male')
    })
  })

  describe('when 2', () => {
    test('returns female', () => {
      expect(sexTransformer(2)).toEqual('female')
    })
  })

  describe('when neither 1 or 2', () => {
    test('throws an error', () => {
      expect(() => sexTransformer(3)).toThrowError('Unsupported Sex: 3')
    })
  })
})
