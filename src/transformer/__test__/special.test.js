import special from '../special';

describe('special', () => {
  test('transforms correctly', () => {
    expect(special('!23')).toEqual('!');
  });
});
