import transformer from '../date';

describe('date', () => {
  describe('when U.S.', () => {
    test('works correctly', () => {
      const date = new Date('2018', '00', '01');
      const country = 'U.S.';

      expect(transformer(date, country)).toEqual('01012018');
    });
  });

  describe('when Canada', () => {
    test('works correctly', () => {
      const date = new Date('2018', '00', '01');
      const country = 'Canada';

      expect(transformer(date, country)).toEqual('20180101');
    });
  });

  describe('when neither Canada or U.S.', () => {
    test('throws an error', () => {
      const date = new Date('2018', '00', '01');
      const country = 'Malaysia';

      expect(() => transformer(date, country)).toThrowError('Invalid country Malaysia.');
    });
  });
});
