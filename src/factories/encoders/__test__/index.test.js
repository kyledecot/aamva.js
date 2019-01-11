import { createDataElementEncoder } from '../index';
import { createDataElement } from '../../index';

describe('createDataElementEncoder', () => {
  describe('when DBA', () => {
    const dataElement = createDataElement('DBA', new Date('2018', '00', '01'));
    const encoder = createDataElementEncoder(dataElement, {
      country: 'U.S.',
    });

    expect(encoder.toString()).toEqual('DBA01012018');
  });
});
