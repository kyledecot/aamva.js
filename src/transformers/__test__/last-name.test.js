import lastNameTransformer from '../first-name';

describe('lastNameTransformer', () => {
  test('transforms correctly', () => {
    const actual = lastNameTransformer('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const expected = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN';

    expect(actual).toEqual(expected);
  });
});
