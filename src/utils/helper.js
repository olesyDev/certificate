export const numberFormatter = (str) => {
  if (str.toString().length < 5) {
    return str;
  }

  const [first, second, ...strs] = str.toString().split("");

  return `${first}${second} ${strs.join("")}`;
};
