export default (value) => {
  switch (value) {
    case 'U.S.':
      return 'USA';
    case 'Canada':
      return 'CAN';
    default:
      throw new Error(`Unsupported Country: ${value}`);
  }
};
