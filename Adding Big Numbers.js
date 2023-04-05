// ----- Adding Big Numbers (4kyu) -----

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// https://www.codewars.com/kata/525f4206b73515bffb000b21

const a = '9922249873532155'
const b = '996632132134213213546'

function add(a, b) {
  const arrayA = [...a]
  const arrayB = [...b]
  const sum = []
  let increment = 0

  if (arrayA.length > arrayB.length) {
    const numbersOfZeros = arrayA.length - arrayB.length
    for (i = 1; i <= numbersOfZeros; i++) arrayB.unshift('0')
  } else {
    const numbersOfZeros = arrayB.length - arrayA.length
    for (i = 1; i <= numbersOfZeros; i++) arrayA.unshift('0')
  }

  for (let i = arrayA.length - 1; i >= 0; i--) {
    let razrad = +arrayA[i] + +arrayB[i] + increment

    if (razrad.toString().length > 1) {
      const razradArray = Array.from(razrad.toString())
      razradArray.shift()
      razrad = razradArray[0]
      increment = 1
    } else {
      increment = 0
    }
    sum.unshift(razrad)
  }

  if (increment === 1) {
    sum.unshift(increment)
  }
  return sum.join('')
}

console.log(add(a, b))
