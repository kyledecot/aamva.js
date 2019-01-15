import Subfile from '../subfile';

class FactorySubfile {
  constructor(type, dataElements) {
    this.type = type;
    this.dataElements = dataElements;
  }

  run() {
    return new Subfile({
      type: this.type,
      dataElements: this.dataElements,
      offset: 0,
      length: 999,
    });
  }
}

export default FactorySubfile;
