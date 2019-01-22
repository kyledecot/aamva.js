import customerIDNumber from '../transformer/customer-id-number';
import truncateIndicator from '../transformer/truncation-indicator';
import countryIdentification from '../transformer/country';
import truncate from '../transformer/truncate';
import placeOfBirth from '../transformer/place-of-birth';

const dataElement = (id, value, options) => {
  switch (id) {
    case 'DAQ':
      return customerIDNumber(value, options);
    case 'DDF':
    case 'DDG':
      return truncateIndicator(value, options);
    case 'DCI':
      return placeOfBirth(value, options);
    case 'DCG':
      return countryIdentification(value, options);
    default:
      throw new Error(`Unsupported Data Element ID: ${id}.`);
  }
};

export default (type, options) => (value) => {
  const { id, ...dataElmentOptions } = options;

  switch (type) {
    case 'data-element':
      return dataElement(id, value, dataElmentOptions);
    case 'truncate':
      return truncate(value, options.length);
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};
