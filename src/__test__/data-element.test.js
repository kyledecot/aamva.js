import DataElement from '../data-element';

describe('DataElement', () => {
  describe('constructor', () => {
    test('works correctly', () => {
      expect(() => {
        new DataElement({
          elementID: 'DAY',
          value: 'HAZ',
        }).toNotThrow();
      });
    });
  });
});
