import dateTransformer from '../transformers/date';
import truncationIndicatorTransformer from '../transformers/truncation-indicator';
import countryTransformer from '../transformers/country';
import sexTransformer from '../transformers/sex';
import eyeColorTransformer from '../transformers/eye-color'
import vehicleClassTransformer from '../transformers/vehicle-class'

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
    default:
      throw new Error(`Unable to build Data Element transformer for: ${elementID}`);
  }
};
