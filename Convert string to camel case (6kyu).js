// ----- Convert string to camel case (6kyu) -----

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

const str = 'The_Stealth_Warrior'

function toCamelCase(str) {
  const array = [...str]
  let index = array.findIndex(element => element === '-' || element === '_')

  while (index !== -1) {
    array.splice(index, 2, array[index + 1].toUpperCase())
    index = array.findIndex(element => element === '-' || element === '_')
  }

  return array.join('')
}

console.log(toCamelCase(str))
