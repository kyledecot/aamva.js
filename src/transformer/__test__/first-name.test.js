import firstNameTransformer from '../first-name';

describe('firstNameTransformer', () => {
  test('transforms correctly', () => {
    const actual = firstNameTransformer('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const expected = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN';

    expect(actual).toEqual(expected);
  });
});
