import moment from 'moment';

const MAPPING = {
  'U.S.': 'MMDDYYYY',
  Canada: 'YYYYMMDD',
};

export default (value, { country }) => {
  const format = MAPPING[country];

  if (format === undefined) {
    throw new Error(`Invalid country ${country}.`);
  }

  return moment(value).format(format);
};
