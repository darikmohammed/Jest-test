reverseString = (inputString) => {
  const arrayString = [...inputString];
  return arrayString.reverse().join('');
};

module.exports = reverseString;
