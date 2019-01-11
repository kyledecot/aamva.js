import DataElementEncoder from '../data-element'
import { createDataElement } from '../../factories'

describe('DataElementEncoder', () => {
  describe('toString', () => {
    describe('ddg', () => {
      it('encodes correctly', () => {
        const dataElement = createDataElement('DDG', true)
        const encoder = new DataElementEncoder(dataElement)

        expect(encoder.toString()).toEqual('DDGT')
      })
    })

    describe('dbc', () => {
      describe('when U.S.', () => {
        test('works correctly', () => {
          const dataElement = createDataElement('DBC', 'U.S.')
          const encoder = new DataElementEncoder(dataElement)

          expect(encoder.toString()).toEqual('DBCUSA')
        })
      })

      describe('when Canada', () => {
        test('works correctly', () => {
          const dataElement = createDataElement('DBC', 'Canada')
          const encoder = new DataElementEncoder(dataElement)

          expect(encoder.toString()).toEqual('DBCCAN')
        })
      })
    })

    describe('DDF', () => {
      describe('when truncated', () => {
        test('encodes correctly', () => {
          const dataElement = createDataElement('DDF', true)
          const encoder = new DataElementEncoder(dataElement)

          expect(encoder.toString()).toEqual('DDFT')
        })
      })

      // describe('when not truncated', () => {
      //   test('encodes correctly', () => {
      //     const dataElement = createDataElement('DDF', false)
      //     const encoder = new DataElementEncoder(dataElement)
      //
      //     expect(dataElement.toString()).toEqual('DDFN')
      //   })
      // })
      //
      // describe('when truncation unknown', () => {
      //   test('encodes correctly', () => {
      //     const dataElement = createDataElement('DDF', null)
      //     const encoder = new DataElementEncoder(dataElement)
      //
      //     expect(dataElement.toString()).toEqual('DDFU')
      //   })
      // })
    })
  })
})
