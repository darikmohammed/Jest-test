const capitalize = (inputString) => {
  //return making the first leter to a capital
  const cap = inputString.charAt(0).toUpperCase() + inputString.slice(1);
  console.log(cap);
  return cap;
};

module.exports = capitalize;
