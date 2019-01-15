// import Transformer from '../transformer';

export default () => () => {} //new Transformer()
// class Transformer {
//   constructor(dataElementID) {
//     this.dataElementID = dataElementID;
//   }
//
//   run(value) {
//     const transformer = () => value;
//
//     switch (this.dataElementID) {
//       case 'DAQ':
//         return transformer(value);
//       case 'DDG':
//         return transformer(value);
//       case 'DDF':
//         return transformer(value);
//       case 'DCG':
//         return transformer(value);
//       case 'DAY':
//         return transformer(value);
//       default:
//         throw new Error(`Unsupported Data Element ID: ${this.dataElementID}`);
//     }
//   }
// }
//
// export default Transformer;
