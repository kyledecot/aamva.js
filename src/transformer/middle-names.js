import truncateTransformer from './truncate';

export default values => truncateTransformer(values.join(','), 40);
