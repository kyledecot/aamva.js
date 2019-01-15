import DataElement from './factory/data-element';
import Encoder from './factory/encoder'
import Subfile from './factory/subfile'
import Transformer from './factory/transformer'

const dataElement = (id, value) => ({
  id,
  value,
})

const transformer = (dataElementID, options = {}) => () => "KYLE"

const Factory = {
  dataElement,
  transformer,
  encoder: () => {
    return new Encoder()
  },
  subfile: () => {
    return new Subfile()
  },
}

export default Factory
