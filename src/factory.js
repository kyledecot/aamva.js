import dataElement from './factory/data-element';
import Encoder from './factory/encoder';
import subfile from './factory/subfile';
import transformer from './factory/transformer';

const Factory = {
  dataElement,
  transformer,
  encoder: () => Encoder,
  subfile,
};

export default Factory;
