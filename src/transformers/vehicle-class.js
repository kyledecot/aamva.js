import truncateTransformer from './truncate'

export default (value) => truncateTransformer(value, {
  length: 6
})
