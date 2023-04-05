// ----- String incrementer (5kyu) -----

// String incrementer
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript

const strng = 'foo'

function incrementString(strng) {
  const patternDigits = /\d+$/
  const digitsArray = strng.match(patternDigits)

  if (digitsArray == null) return `${strng}1`

  const digitsString = digitsArray.join('')
  const lettersPart = strng.replace(patternDigits, '')

  let digitsPart = +digitsString + 1

  const numberOfZeros = digitsString.length - digitsPart.toString().length

  for (i = 1; i <= numberOfZeros; i++) {
    digitsPart = '0'.concat(digitsPart.toString())
  }

  return `${lettersPart}${digitsPart}`
}

console.log(incrementString(strng))
