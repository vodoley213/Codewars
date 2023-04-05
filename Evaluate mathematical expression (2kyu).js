// ----- Evaluate mathematical expression (2kyu) -----

// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.
// https://www.codewars.com/kata/52a78825cdfc2cfc87000005

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 1+1    // 2
// 1 +1   // 2
// 1+ 1   // 2
// 1 + 1  // 2
// 1+ -1  // 0
// 1 + -1 // 0
// 1+-1   // 0

// 1*1    // 1
// 1 *1   // 1
// 1* 1   // 1
// 1 * 1  // 1
// 1* -1  // -1
// 1 * -1 // -1
// 1*-1   // -1

// 1/1    // 1
// 1 /1   // 1
// 1/ 1   // 1
// 1 / 1  // 1
// 1/ -1  // -1
// 1 / -1 // -1
// 1/-1   // -1

// ['1+1', 2],
// ['1 - 1', 0],
// ['1* 1', 1],
// ['1 /1', 1],
// ['-123', -123],
// ['123', 123],
// ['2 /2+3 * 4.75- -6', 21.25],
// ['12* 123', 1476],
// ['2 / (2 + 3) * 4.33 - -6', 7.732],

// 12* 123/-(-5 + 2) // 492

// const expression = '12* 123/-(-5 + 2)'
// const expression = '4 + (-2+3)*9'

const expression = '12* 123/-(-5 + 2)'

const calc = function (expression) {
  const BRACKETS_RegEx =
    /(?<isMinusBeforeBrackets>[-])?\((?<expression>[^\(\)]*)\)/

  const MULTIPLY_DIVIDE_RegExp =
    /(?<number1>[-]?\d+(?:\.\d+)?(?:[eE][-+]?[\d]+)?)\s*(?<operator>[\/\*])\s*(?<number2>[-]?\d+(?:\.\d+)?(?:[eE][-+]?[\d]+)?)/

  const ADD_SUBTRUCT_RegExp =
    /(?<number1>[-]?\d+(?:\.\d+)?(?:[eE][-+]?[\d]+)?)\s*(?<operator>(?<!e)[\+\-])\s*(?<number2>[-]?\d+(?:\.\d+)?(?:[eE][-+]?[\d]+)?)/

  if (expression.match(BRACKETS_RegEx)) {
    isMunis = expression.match(BRACKETS_RegEx).groups.isMinusBeforeBrackets
      ? -1
      : 1

    let subExpression = expression.match(BRACKETS_RegEx).groups.expression

    const result = calc(subExpression) * isMunis
    const newExpression = expression.replace(BRACKETS_RegEx, result)
    return calc(newExpression)
  } else if (expression.match(MULTIPLY_DIVIDE_RegExp)) {
    const intResult = calculation(
      expression.match(MULTIPLY_DIVIDE_RegExp).groups
    )
    const newExpression = expression.replace(MULTIPLY_DIVIDE_RegExp, intResult)
    return calc(newExpression)
  } else if (expression.match(ADD_SUBTRUCT_RegExp)) {
    const intResult = calculation(expression.match(ADD_SUBTRUCT_RegExp).groups)
    const newExpression = expression.replace(ADD_SUBTRUCT_RegExp, intResult)
    return calc(newExpression)
  } else return parseFloat(expression)
}

function calculation({ number1, number2, operator }) {
  const num1 = parseFloat(number1)
  const num2 = parseFloat(number2)

  switch (operator) {
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
  }
}

console.log(calc(expression))
