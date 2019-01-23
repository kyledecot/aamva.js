import customerIDNumber from '../transformer/customer-id-number';
import truncateIndicator from '../transformer/truncation-indicator';
import countryIdentification from '../transformer/country';
import truncate from '../transformer/truncate';
import placeOfBirth from '../transformer/place-of-birth';
import jurisdictionSpecificVehicleClass from '../transformer/jurisdiction-specific-vehicle-class';
import jurisdictionSpecificRestrictionCodes from '../transformer/jurisdiction-specific-restriction-codes';
import jurisdictionSpecificEndorsementCodes from '../transformer/jurisdiction-specific-endorsement-codes';
import date from '../transformer/date';
import firstName from '../transformer/first-name';
import lastName from '../transformer/last-name';
import middleNames from '../transformer/middle-names';
import sex from '../transformer/sex';
import eyeColor from '../transformer/eye-color';
import height from '../transformer/height';

const dataElement = (id, value, options) => {
  switch (id) {
    case 'DAU':
      return height(value, options);
    case 'DAY':
      return eyeColor(value, options);
    case 'DBA':
    case 'DBD':
    case 'DBB':
      return date(value, options);
    case 'DBC':
      return sex(value, options);
    case 'DAD':
      return middleNames(value, options);
    case 'DAQ':
      return customerIDNumber(value, options);
    case 'DAC':
      return firstName(value, options);
    case 'DCS':
      return lastName(value, options);
    case 'DDF':
    case 'DDG':
      return truncateIndicator(value, options);
    case 'DCI':
      return placeOfBirth(value, options);
    case 'DCG':
      return countryIdentification(value, options);
    case 'DCA':
      return jurisdictionSpecificVehicleClass(value, options);
    case 'DCB':
      return jurisdictionSpecificRestrictionCodes(value, options);
    case 'DCD':
      return jurisdictionSpecificEndorsementCodes(value, options);
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
