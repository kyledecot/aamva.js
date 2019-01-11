import DataElementEncoder from '../data-element';
import { createDataElement } from '../../factories';

describe('DataElementEncoder', () => {
  describe('toString', () => {
    describe('ddg', () => {
      it('encodes correctly', () => {
        const dataElement = createDataElement('DDG', true);
        const encoder = new DataElementEncoder(dataElement);

        expect(encoder.toString()).toEqual('DDGT');
      });
    });

    describe('DCG (Country Identification)', () => {
      describe('when U.S.', () => {
        test('works correctly', () => {
          const dataElement = createDataElement('DCG', 'U.S.');
          const encoder = new DataElementEncoder(dataElement);

          expect(encoder.toString()).toEqual('DCGUSA');
        });
      });

      describe('when Canada', () => {
        test('works correctly', () => {
          const dataElement = createDataElement('DCG', 'Canada');
          const encoder = new DataElementEncoder(dataElement);

          expect(encoder.toString()).toEqual('DCGCAN');
        });
      });
    });

    describe('DDF (First Name Truncation)', () => {
      describe('when truncated', () => {
        test('encodes correctly', () => {
          const dataElement = createDataElement('DDF', true);
          const encoder = new DataElementEncoder(dataElement);

          expect(encoder.toString()).toEqual('DDFT');
        });
      });

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
    });
  });
});
