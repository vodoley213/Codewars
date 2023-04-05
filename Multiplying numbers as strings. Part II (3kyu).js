// ----- Multiplying numbers as strings. Part II (3kyu) -----

// TODO:
// Multiply two numbers! Simple!

// Rules
// The arguments are passed as strings.
// The numbers will be very large
// The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
// Answer should be returned as string
// The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
// Zero should not be signed and "-0.0" should be simply returned as "0".
// https://www.codewars.com/kata/5923fbc72eafa9bcff00011a

// (multiply('2', '3'), '6')
// (multiply('30', '69'), '2070')
// (multiply('11', '85'), '935')
// (multiply('-0.00', '0.0000'), '0')
// (multiply('-0.01', '0.0000'), '0')
// (multiply('2.01', '3.0000'), '6.03')
// (multiply('2', '-3.000001'), '-6.000002')
// (multiply('-5.0908', '-123.1'), '626.67748')
// expected '.908' to equal '0.000908'

const str = '-00000.25000000000'
const ing = '-00004.05'

function multiply(str, ing) {
  // Formatting input numbers
  let isMunus = false
  if (
    (str.includes('-') && !ing.includes('-')) ||
    (!str.includes('-') && ing.includes('-'))
  )
    isMunus = true
  let digitsAfrerComma = 0

  str = str.replace('-', '').replace(/^0+/, '') // Remove the minus and zeros at the beginning of the number
  ing = ing.replace('-', '').replace(/^0+/, '')

  if (str.includes('.')) {
    str = str.replace(/0+$/, '') // Remove zeros at the end of the str number
    digitsAfrerComma += str.replace(/\d*?\./, '').length // How many digits after the decimal point
  }

  if (ing.includes('.')) {
    ing = ing.replace(/0+$/, '') // Remove zeros at the end of the ing number
    digitsAfrerComma += ing.replace(/\d*?\./, '').length // How many digits after the decimal point
  }

  // We remove the dot and zeros to the first significant digit. Final formatted numbers
  str =
    str.replace(/^\.0+/, '').replace('.', '') === ''
      ? '0'
      : str.replace(/^\.0+/, '').replace('.', '')
  ing =
    ing.replace(/^\.0+/, '').replace('.', '') === ''
      ? '0'
      : ing.replace(/^\.0+/, '').replace('.', '')

  console.log(str)
  console.log(ing)
  console.log(digitsAfrerComma)
  if (str === '0' || ing === '0') {
    return '0'
  }

  // Creating arrays from strings for multiplication
  if ([...str].length >= [...ing].length) {
    arrayA = [...str]
    arrayB = [...ing]
  } else {
    arrayA = [...ing]
    arrayB = [...str]
  }

  // String Multiplication Loop
  const result = []

  for (let i = arrayB.length - 1; i >= 0; i--) {
    let sum = []
    let increment = 0

    for (let j = arrayA.length - 1; j >= 0; j--) {
      let razrad = (+arrayA[j] * +arrayB[i] + +increment).toString()

      if (razrad.length > 1) {
        increment = razrad.substring(0, 1)
        razrad = razrad.substring(1)
      } else {
        increment = 0
      }

      sum.unshift(razrad)
      if (j === 0 && increment !== 0) sum.unshift(increment)
    }
    result.push(sum.join('') + '0'.repeat(arrayB.length - 1 - i))
  }

  let afterSummation = result.reduce(add)
  console.log(afterSummation)

  if (digitsAfrerComma !== 0) {
    const zerosToPush = digitsAfrerComma - afterSummation.length
    if (zerosToPush >= 0) {
      afterSummation = '0.' + '0'.repeat(zerosToPush) + afterSummation
      afterSummation = afterSummation.replace(/0+$/, '') // remove zeros at the end
    } else {
      console.log('digitsAfrerComma', digitsAfrerComma)
      console.log('afterSummation.length', afterSummation.length)
      afterSummation =
        afterSummation.slice(0, afterSummation.length - digitsAfrerComma) +
        '.' +
        afterSummation.slice(afterSummation.length - digitsAfrerComma)
    }
  }

  const finalResult = isMunus ? '-' + afterSummation : afterSummation

  return finalResult.replace(/\.0+$/, '')
}

console.log(multiply(str, ing))

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
