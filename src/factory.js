// import DataElement from './factory/data-element';
import Encoder from './factory/encoder';
import Subfile from './factory/subfile';
import transformer from './factory/transformer';

const dataElement = (id, value) => ({
  id,
  value,
});

const Factory = {
  dataElement,
  transformer,
  encoder: () => Encoder,
  subfile: () => new Subfile(),
};

export default Factory;
