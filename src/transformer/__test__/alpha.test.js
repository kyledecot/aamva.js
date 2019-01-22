import alpha from '../alpha';

describe('alpha', () => {
  test('transforms correctly', () => {
    expect(alpha('COLUMBUS, OHIO')).toEqual('COLUMBUSOHIO');
  });
});
