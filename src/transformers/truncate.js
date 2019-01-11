import { truncate } from 'lodash'

export default (value, length) => truncate(value, {
  length,
  omission: '',
})
