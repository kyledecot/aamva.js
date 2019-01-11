import truncationIndicator from '../transformers/truncation-indicator'

const DBC_MAPPING = {
  'Canada': 'CAN',
  'U.S.': 'USA'
}

export default class DataElementEncoder {
  constructor (dataElement) {
    this.dataElement = dataElement
  }

  toString () {
    const funcName = `_${this.dataElement.elementID}`
    const func = this[funcName]

    if (func === undefined) {
      throw new Error(`${funcName} is not defined.`)
    }

    return 'KYLE'
  }

  _DBC() {
    return `DBC${DBC_MAPPING[this.dataElement.value]}`
  }

  _DDF() {
    return this._format('DDF', truncationIndicator(this.dataElement.value))
  }

  _DDG() {
    return this._format('DDG', truncationIndicator(this.dataElement.value))
  }

  _format(id, value) {
    return `${id}${value}`
  }
}
