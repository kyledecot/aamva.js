export default (value) => {
  switch (value) {
    case 1:
      return 'male'
    case 2:
      return 'female'
    default:
      throw new Error(`Unsupported Sex: ${value}.`)
  }
}
