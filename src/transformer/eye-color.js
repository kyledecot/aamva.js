export default (value) => {
  switch (value) {
    case 'Black':
      return 'BLK';
    case 'Blue':
      return 'BLU';
    case 'Brown':
      return 'BRO';
    case 'Dichromatic':
      return 'DIC';
    case 'Gray':
      return 'GRY';
    case 'Green':
      return 'GRN';
    case 'Hazel':
      return 'HAZ';
    case 'Maroon':
      return 'MAR';
    case 'Pink':
      return 'PNK';
    case 'Unknown':
      return 'UNK';
    default:
      throw new Error(`Unsupported Eye Color: ${value}`);
  }
};
