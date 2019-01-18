class DataElement {
  constructor(dataElement, factory, options = {}) {
    this.transformer = factory.transformer('data-element', {
      id: dataElement.id,
      ...options,
    });
    this.dataElement = dataElement;
  }

  toString() {
    const transformedValue = this.transformer(this.dataElement.value);

    return `${this.dataElement.id}${transformedValue}`;
  }
}

export default DataElement;
