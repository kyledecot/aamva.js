import endorsementCodesTransformer from '../endorsement-codes';

describe('endorsementCodesTransformer', () => {
  test('transforms correctly', () => {
    expect(endorsementCodesTransformer('ABC123')).toEqual('ABC12')
  })
});
