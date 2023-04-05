// ----- parseInt() reloaded (4kyu) -----

// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them
// https://www.codewars.com/kata/parseint-reloaded

const string = 'seven hundred eighty-three thousand nine hundred and nineteen'

function parseInt(string) {
  const translator = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eightteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: '00',
    thousand: '000',
  }

  if (string === 'one million' || string === '1 million') return 1000000

  const andPattern = /\sand/g
  const formattedString = string.replace(andPattern, '')
  const arrayFromString = formattedString.split(' ')

  const arrayWithDigits = arrayFromString.map(elem => {
    if (elem.indexOf('-') !== -1)
      return translator[elem.split('-')[0]] + translator[elem.split('-')[1]]
    return translator[elem]
  })

  const dozensIndex = arrayWithDigits.lastIndexOf('00')

  if (dozensIndex == -1) return +arrayWithDigits
  const dozens = +arrayWithDigits.splice(dozensIndex + 1).join('')

  // Looking for thousands by string "000"
  const hundredsIndex = arrayWithDigits.lastIndexOf('000')
  if (hundredsIndex == -1) return +arrayWithDigits.join('') + dozens

  const hundreds = +arrayWithDigits.splice(hundredsIndex + 1).join('')

  // Looking for hundreds of thousands on the string "00"
  const thousandsIndex = arrayWithDigits.lastIndexOf('00')
  if (thousandsIndex == -1) return +arrayWithDigits.join('') + hundreds + dozens

  arrayWithDigits.splice(thousandsIndex, 1)
  const thousands = +arrayWithDigits.join('')

  return thousands + hundreds + dozens
}

console.log('Final: ', parseInt(string))
