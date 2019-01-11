import dateTransformer from '../transformers/date';
import truncationIndicatorTransformer from '../transformers/truncation-indicator';
import countryTransformer from '../transformers/country';
import sexTransformer from '../transformers/sex';

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
    default:
      throw new Error(`Unable to build Data Element transformer for: ${elementID}`);
  }
};
