import middleNamesTransformer from '../middle-names';

describe('middleNamesTransformer', () => {
  test('transforms correctly', () => {
    const actual = middleNamesTransformer(['ABCDEFGHIJKLMNOPQRS', 'TUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ']);
    const expected = 'ABCDEFGHIJKLMNOPQRS,TUVWXYZABCDEFGHIJKLM';

    expect(actual).toEqual(expected);
  });
});
