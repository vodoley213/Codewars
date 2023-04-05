// ----- Exes and Ohs (7kyu) -----

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

const str = 'zzoo'
function XO(str) {
  str = str.toUpperCase()
  numberOfX = [...str].filter(elem => elem === 'X').length
  numberOfO = [...str].filter(elem => elem === 'O').length
  return numberOfX === numberOfO ? true : false
}

console.log(XO(str))
