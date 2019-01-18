import Transformer from '../factory/transformer';

export default (value) => {
  const truncateTransformer = Transformer('truncate', {
    length: 25,
  });

  return truncateTransformer(value);
};
