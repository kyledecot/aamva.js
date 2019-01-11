import moment from 'moment'

const MAPPING = {
  'U.S.': 'MMMMDYYYY',
  'Canada': 'YYYYMMMMD'
}

export default (value, country) => {
  const format = MAPPING[value]

  if (format === undefined) {
    throw new Error(`Invalid country ${country}.`)
  }

  return moment(value).format(format)
}
