import DataElementEncoder from '../../encoders/data-element'

const createDataElementEncoder = (dataElement, options = {}) => {
  return new DataElementEncoder(dataElement, options)
}

export {
  createDataElementEncoder
}

//
// import truncationIndicator from '../transformers/truncation-indicator'
//
// const DBC_MAPPING = {
//   'Canada': 'CAN',
//   'U.S.': 'USA'
// }
//
// // console.log(`_${this.dataElement.elementID}`)
// // // return this[`_${this.dataElement.elementID}`].apply()
// // // const func = this[funcName]
// // //
// // // if (func === undefined) {
// // //   throw new Error(`${funcName} is not defined.`)
// // // }
// // //
// // // return (func.bind(this))()
// //
// // _DBC() {
// //   return `DBC${DBC_MAPPING[this.dataElement.value]}`
// // }
// //
// // _DDF() {
// //   console.log('HERE', this.dataElement.value)
// //
// //   return this._format('DDF', truncationIndicator(this.dataElement.value))
// // }
// //
// // _DDG() {
// //   return this._format('DDG', truncationIndicator(this.dataElement.value))
// // }
// //
// // _format(id, value) {
// //   return 'KYLE'
// // }
