import dataElement from '../data-element';
import Factory from '../../factory';

describe('dataElement', () => {
  test('works correctly', () => {
    const expectedDataElement = Factory.dataElement('DAY', 'HAZ');

    expect(dataElement('DAY', 'HAZ')).toEqual(expectedDataElement);
  });
});
