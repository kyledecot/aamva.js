import Subfile from '../subfile'

export default (type, dataElements) => {
  // TODO: How to figure out offset
  // TODO: Calculate length
  return new Subfile({
    type,
    dataElements,
    offset: 0,
    length: 999
  })
}
