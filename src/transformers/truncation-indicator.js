const UNKNOWN = 'U';

const MAPPING = {
  'true': 'T',
  'false': 'N'
}

export default (value) => MAPPING[value] || UNKNOWN
