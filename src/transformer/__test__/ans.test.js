import ans from '../ans';

describe('ans', () => {
  test('transforms correctly', () => {
    expect(ans('123 MAIN ST')).toEqual('123 MAIN ST');
  });
});
