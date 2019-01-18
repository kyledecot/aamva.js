// import Transformer from '../transformer';

import customerIDNumber from '../transformer/customer-id-number';
import truncateIndicator from '../transformer/truncation-indicator'
import countryIdentification from '../transformer/country'
import truncate from '../transformer/truncate'

const dataElement = (id, value, options) => {
  switch (id) {
    case 'DAQ':
      return customerIDNumber(value, options);
    case 'DDF':
    case 'DDG':
      return truncateIndicator(value, options);
    case 'DCG':
      return countryIdentification(value, options)
    default:
      throw new Error(`Unknown: ${id}`);
  }
};

export default (type, options) => (value) => {
  switch (type) {
    case 'data-element':
      const { id, ...dataElmentOptions } = options;
      return dataElement(id, value, dataElmentOptions);
    case 'truncate':
      return truncate(value, options.length)
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};
// class Transformer {
//   constructor(dataElementID) {
//     this.dataElementID = dataElementID;
//   }
//
//   run(value) {
//     const transformer = () => value;
//
//     switch (this.dataElementID) {
//       case 'DAQ':
//         return transformer(value);
//       case 'DDG':
//         return transformer(value);
//       case 'DDF':
//         return transformer(value);
//       case 'DCG':
//         return transformer(value);
//       case 'DAY':
//         return transformer(value);
//       default:
//         throw new Error(`Unsupported Data Element ID: ${this.dataElementID}`);
//     }
//   }
// }
//
// export default Transformer;
