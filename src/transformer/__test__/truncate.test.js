import truncate from '../truncate';

describe('truncate', () => {
  test('transforms correctly', () => {
    expect(truncate('KYLE', 3)).toEqual('KYL');
  });
});
