import jurisdictionSpecificRestrictionCodes from '../jurisdiction-specific-restriction-codes';

describe('jurisdictionSpecificRestrictionCodes', () => {
  test('works correctly', () => {
    const expected = 'DAYLIGHT ONL';

    expect(jurisdictionSpecificRestrictionCodes('DAYLIGHT ONLY')).toEqual(expected);
  });
});
