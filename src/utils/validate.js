export const validate = (input, value, item) => {
  switch (input) {
    case "DNI":
      return value[input].length <= 7
        ? value[input] + item?.toString(10)
        : value[input];
    case "pass":
      return value[input].length < 4
        ? value[input] + item?.toString(10)
        : value[input];
    default:
      break;
  }
};
