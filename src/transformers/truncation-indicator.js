export default (value) => {
  switch (value) {
    case true:
      return 'T'
    case false:
      return 'N'
    default:
      return 'U'
  }
}
