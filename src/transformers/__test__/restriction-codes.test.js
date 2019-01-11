import restrictionCodesTransformer from '../restriction-codes';

describe('restrictionCodesTransformer', () => {
  test('transforms correctly', () => {
    expect(restrictionCodesTransformer('ABC123ABC1234')).toEqual('ABC123ABC123');
  });
});
