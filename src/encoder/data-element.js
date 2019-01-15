import Transformer from '../factory/transformer';

class DataElement {
  constructor(dataElement, options = {}) {
    this.transformer = new Transformer(dataElement.id, options);
    this.dataElement = dataElement;
  }

  toString() {
    const transformedValue = this.transformer(this.dataElement.value);

    return `${this.dataElement.id}${transformedValue}`;
  }
}

export default DataElement;
