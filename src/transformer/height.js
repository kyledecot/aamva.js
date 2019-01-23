// import truncateTransformer from './truncate';

export default (value, { unit }) => {
  const paddedValue = `${value}`.padStart(3, '0');

  switch (unit) {
    case 'in':
    case 'cm':
      return `${paddedValue} ${unit}`;
    default:
      throw new Error(`Unsupported Unit of Measurement: ${unit}`);
  }
};
