import numeric from '../numeric';

describe('numeric', () => {
  test('transforms correctly', () => {
    expect(numeric('123 MAIN ST')).toEqual('123');
  });
});
