import dateTransformer from '../transformers/date';
import truncationIndicatorTransformer from '../transformers/truncation-indicator';
import countryTransformer from '../transformers/country';
import sexTransformer from '../transformers/sex';
import eyeColorTransformer from '../transformers/eye-color'
import vehicleClassTransformer from '../transformers/vehicle-class'
import restrictionCodesTransformer from '../transformers/restriction-codes'
import endorsementCodesTransformer from '../transformers/endorsement-codes'
import firstNameTransformer from '../transformers/first-name'
import lastNameTransformer from '../transformers/last-name'

export default ({ elementID, value, options }) => {
  switch (elementID) {
    case 'DBA':
      return ({ country }) => dateTransformer(value, country);
    case 'DDF':
    case 'DDG':
      return () => truncationIndicatorTransformer(value);
    case 'DBC':
      return () => sexTransformer(value);
    case 'DCG':
      return () => countryTransformer(value);
    case 'DAY':
      return () => eyeColorTransformer(value)
    case 'DCA':
      return ({ length }) => vehicleClassTransformer(value)
    case 'DCB':
      return () => restrictionCodesTransformer(value)
    case 'DCD':
      return () => endorsementCodesTransformer(value)
    case 'DAC':
      return () => firstNameTransformer(value)
    case 'DCS':
      return () => lastNameTransformer(value)
    default:
      throw new Error(`Unable to build Data Element transformer for: ${elementID}`);
  }
};
