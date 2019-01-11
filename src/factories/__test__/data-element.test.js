import dataElement from '../data-element';
import DataElement from '../../data-element';

describe('dataElement', () => {
  test('works correctly', () => {
    const expectedDataElement = new DataElement({
      elementID: 'DAY',
      value: 'HAZ',
    });

    expect(dataElement('DAY', 'HAZ')).toEqual(expectedDataElement);
  });
});
