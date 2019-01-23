import DataElementEncoder from './data-element';

export default class Subfile {
  constructor(subfile, factory, options) {
    this.subfile = subfile;
    this.factory = factory;
    this.options = options;
  }

  toString() {
    const encodedDataElements = this.subfile.dataElements.map((dataElement) => {
      return new DataElementEncoder(dataElement, this.factory, this.options).toString();
    });

    return `${this.subfile.type}${encodedDataElements}`;
  }
}
