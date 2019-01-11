import createDataElement from '../create-data-element'
import DataElement from '../../data-element'

describe('createDataElement', () => {
  test('works correctly',() => {
    const expectedDataElement = new DataElement({
      elementID: 'DAY',
      value: 'HAZ'
    })

    expect(createDataElement('DAY', 'HAZ')).toEqual(expectedDataElement)
  })
})
