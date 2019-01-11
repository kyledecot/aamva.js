import dateTransformer from '../../transformers/date'

export default (id, value, options = {}) => {
  const { country } = options

  return `${id}${dateTransformer(value, country)}`
}
