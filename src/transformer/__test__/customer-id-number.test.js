import customerIDNumberTransformer from '../customer-id-number';

describe('customerIDNumberTransformer', () => {
  test('transforms correctly', () => {
    const actual = customerIDNumberTransformer('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    const expected = 'ABCDEFGHIJKLMNOPQRSTUVWXY'

    expect(actual).toEqual(expected);
  });
});
