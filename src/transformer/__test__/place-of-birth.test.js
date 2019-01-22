import placeOfBirth from '../place-of-birth';

describe('placeOfBirth', () => {
  test('transforms correctly', () => {
    const actual = placeOfBirth('COLUMBUS OHIO 43210');
    const expected = 'COLUMBUSOHIO';

    expect(actual).toEqual(expected);
  });
});
