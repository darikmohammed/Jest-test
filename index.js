stringLength = (inputString) => {
  const arrayString = [...inputString];
  if (arrayString.length <= 1 || arrayString.length > 10) {
    throw new Error('array length is not in range');
  }
  return arrayString.length;
};

module.exports = stringLength ; 
