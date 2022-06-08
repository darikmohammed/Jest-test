const stringLength = require('./index');
const reverseString = require('./reverseString');
const Calculator = require('./Calculation');
const Capitalizaiton = require('./capitalize');

test('string length check', () => {
  const test = 'abebe';
  expect(stringLength(test)).toBe(5);
});

test('string length check 2', () => {
  const test = 'kebechand';
  expect(stringLength(test)).toBe(9);
});

test('string error to throw', () => {
  const test = 'aaaaaaaaaaa';
  expect(() => stringLength(test)).toThrow(Error);
});

test('string error to throw', () => {
  const test = 'a';
  expect(() => stringLength(test)).toThrow(Error);
});

test('reverse string', () => {
  const test = 'hello';
  expect(reverseString(test)).toMatch(/olleh/);
});

describe('calculation test case', () => {
  const calculator = new Calculator();
  describe('addition case', () => {
    test('addition test first', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('addition test second', () => {
      expect(calculator.add(-1, 2)).toBe(1);
    });
    test('addition test third', () => {
      expect(calculator.add(-1, -5)).toBe(-6);
    });
    test('addition test fourth', () => {
      expect(calculator.add(1, -5)).toBe(-4);
    });
  });

  describe('subtraction case', () => {
    test('subtraction test first', () => {
      expect(calculator.subtract(-1, 1)).toBe(-2);
    });

    test('subtraction test second', () => {
      expect(calculator.subtract(1, -1)).toBe(2);
    });

    test('subtraction test third', () => {
      expect(calculator.subtract(1, 10)).toBe(-9);
    });

    test('subtraction test forth', () => {
      expect(calculator.subtract(9, 7)).toBe(2);
    });
  });
  describe('Multiplication case', () => {
    test('multiply test first', () => {
      expect(calculator.multiply(-1, 1)).toBe(-1);
    });

    test('multiply test second', () => {
      expect(calculator.multiply(2, 10)).toBe(20);
    });

    test('multiply test third', () => {
      expect(calculator.multiply(3, -5)).toBe(-15);
    });

    test('multiply test forth', () => {
      expect(calculator.multiply(9, 0)).toBe(0);
    });
  });

  describe('Division case', () => {
    test('divide test first', () => {
      expect(calculator.divide(-1, 1)).toBeCloseTo(-1);
    });

    test('divide test second', () => {
      expect(calculator.divide(20, 10)).toBeCloseTo(2);
    });

    test('divide test third', () => {
      expect(() => calculator.divide(9, 0)).toThrow(Error);
    });
  });
});

describe('capitalization test', () => {
  test('testCapital Letter', () => {
    expect(Capitalizaiton('something')).toMatch(/Something/);
  });

  test('testCapital Letter', () => {
    expect(Capitalizaiton('Nomething')).toMatch(/Nomething/);
  });
});
