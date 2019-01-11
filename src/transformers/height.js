import truncateTransformer from './truncate'

export default (value, unitOfMeasurement) => {
  const paddedValue = `${value}`.padStart(3, '0')

  switch (unitOfMeasurement) {
    case 'in':
    case 'cm':
    return `${paddedValue} ${unitOfMeasurement}`
      break;
    default:
      throw new Error(`Unsupported Unit of Measurement: ${unitOfMeasurement}`)
  }
}
