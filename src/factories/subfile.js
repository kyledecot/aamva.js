import Subfile from '../subfile';

export default // TODO: How to figure out offset
// TODO: Calculate length
(type, dataElements) => new Subfile({
  type,
  dataElements,
  offset: 0,
  length: 999,
});
