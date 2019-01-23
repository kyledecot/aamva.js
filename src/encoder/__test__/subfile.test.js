import Encoder from '../subfile';
import Factory from '../../factory';
import Standard from '../../standard';

describe('Subfile', () => {
  describe('toString', () => {
    describe('with data elements', () => {
      test('returns correctly', () => {
        const subfile = Factory.subfile('DL', [
          Factory.dataElement('DCA', ''),
          Factory.dataElement('DCB', ''),
          Factory.dataElement('DCD', ''),
          Factory.dataElement('DBA', new Date()),
          Factory.dataElement('DCS', ''),
          Factory.dataElement('DAC', ''),
          Factory.dataElement('DAD', ['BRANDON']),
          Factory.dataElement('DBD', ''),
          Factory.dataElement('DBB', ''),
          Factory.dataElement('DBC', 1),
          Factory.dataElement('DAY', 'Hazel'),
          Factory.dataElement('DAU', 60),
          Factory.dataElement('DAG', ''),
          Factory.dataElement('DAI', ''),
          Factory.dataElement('DAJ', ''),
          Factory.dataElement('DAK', ''),
          Factory.dataElement('DAQ', ''),
          Factory.dataElement('DCF', ''),
          Factory.dataElement('DCG', ''),
          Factory.dataElement('DDE', ''),
          Factory.dataElement('DDF', ''),
          Factory.dataElement('DDG', ''),
        ]);

        const encoder = new Encoder(subfile, Factory, {
          country: 'U.S.',
          unit: 'in',
        });
        const expected = `DLDCANONE${Standard.dataElementSeparator()}`;

        expect(encoder.toString()).toEqual(expected);
      });
    });

    // describe('without data elements', () => {
    //   test('returns correctly', () => {
    //     const subfile = new Subfile({
    //       type: 'DL',
    //       dataElements: [],
    //     });
    //     const expected = 'DL';
    //
    //     expect(subfile.toString()).toEqual(expected);
    //   });
    // });
  });
});
