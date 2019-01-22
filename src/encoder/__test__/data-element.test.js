import Encoder from '../data-element';
import Factory from '../../factory';

describe('Encoder - Data Element', () => {
  describe('toString', () => {
    describe('DAQ (Customer ID Number)', () => {
      test('encodes correctly', () => {
        const dataElement = Factory.dataElement('DAQ', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const encoder = new Encoder(dataElement, Factory);

        expect(encoder.toString()).toEqual('DAQABCDEFGHIJKLMNOPQRSTUVWXY');
      });
    });

    describe('DDG', () => {
      test('encodes correctly', () => {
        const dataElement = Factory.dataElement('DDG', true);
        const encoder = new Encoder(dataElement, Factory);

        expect(encoder.toString()).toEqual('DDGT');
      });
    });

    describe('DCG (Country Identification)', () => {
      describe('when U.S.', () => {
        test('works correctly', () => {
          const dataElement = Factory.dataElement('DCG', 'U.S.');
          const encoder = new Encoder(dataElement, Factory);

          expect(encoder.toString()).toEqual('DCGUSA');
        });
      });

      describe('when Canada', () => {
        test('works correctly', () => {
          const dataElement = Factory.dataElement('DCG', 'Canada');
          const encoder = new Encoder(dataElement, Factory);

          expect(encoder.toString()).toEqual('DCGCAN');
        });
      });
    });

    describe('DCI (Place of Birth)', () => {
      test('encodes correctly', () => {
        const dataElement = Factory.dataElement('DCI', 'Columbus');
        const encoder = new Encoder(dataElement, Factory);

        expect(encoder.toString()).toEqual('DCIColumbus');
      });
    });

    describe('DDF (First Name Truncation)', () => {
      describe('when truncated', () => {
        test('encodes correctly', () => {
          const dataElement = Factory.dataElement('DDF', true);
          const encoder = new Encoder(dataElement, Factory);

          expect(encoder.toString()).toEqual('DDFT');
        });
      });

      describe('when not truncated', () => {
        test('encodes correctly', () => {
          const dataElement = Factory.dataElement('DDF', false);
          const encoder = new Encoder(dataElement, Factory);

          expect(encoder.toString()).toEqual('DDFN');
        });
      });

      describe('when truncation unknown', () => {
        test('encodes correctly', () => {
          const dataElement = Factory.dataElement('DDF', null);
          const encoder = new Encoder(dataElement, Factory);

          expect(encoder.toString()).toEqual('DDFU');
        });
      });
    });
  });
});
