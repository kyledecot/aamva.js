import dateTransformer from '../transformers/date'
import truncationIndicatorTransformer from '../transformers/truncation-indicator'
import countryTransformer from '../transformers/country'
import sexTransformer from '../transformers/sex'

export default class DataElementEncoder {
  constructor (dataElement, options = {}) {
    this.dataElement = dataElement
    this.options = options
  }

  toString () {
    const { elementID, value } = this.dataElement
    let mappedValue;

    switch (this.dataElement.elementID) {
      case 'DBA':
        mappedValue = dateTransformer(value, this.options.country)
        break;
      case 'DDF':
      case 'DDG':
        mappedValue = truncationIndicatorTransformer(value)
        break;
      case 'DBC':
        mappedValue = countryTransformer(value)
        break;
      case 'KYLE':
        mappedValue = sexTransformer(value)
        break
      default:
        throw new Error(`Unsupported Data Element: ${elementID}`)
    }

    return `${elementID}${mappedValue}`
  }
}
