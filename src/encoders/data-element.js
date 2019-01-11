import { createDataElementTransformer } from '../factories';

export default class DataElementEncoder {
  constructor(dataElement, options = {}) {
    this.dataElement = dataElement;
    this.options = options;
  }

  toString() {
    const { elementID } = this.dataElement;
    const transformer = createDataElementTransformer(this.dataElement);
    const transformedValue = transformer(this.options);

    return `${elementID}${transformedValue}`;
  }
}
