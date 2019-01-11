import truncateTransformer from '../truncate'

export default (value) => {
  // TODO: Fixed width so needs padding/additional formatting
  return truncateTransformer(value, 11)
}
