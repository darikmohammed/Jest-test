class Calculation {
  add = (num1, num2) => {
    return num1 + num2;
  };

  subtract = (num1, num2) => {
    return num1 - num2;
  };

  multiply = (num1, num2) => {
    return num1 * num2;
  };

  divide = (num1, num2) => {
    if (num2 === 0) {
      throw new Error('can not divide a number with 0');
    }
    return num1 / num2;
  };
}

module.exports = Calculation;
