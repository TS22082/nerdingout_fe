const capFirstLetter = (str: string) => {
  if (!str || str.length === 0) return str;

  const firstChar = str.charAt(0).toUpperCase();
  const remainingChars = str.slice(1);

  return firstChar + remainingChars;
};

export default capFirstLetter;
