// ----- Integer Square Root (2kyu) -----

// For each given a number N, the integer S is called integer square root of N if S x S <= N and (S+1) x (S+1) > N.
// In other words, S = Math.floor(Math.sqrt(N))
// Your task is to calculate the integer square root of a given Number.
// Note: Input is given in string format. That is, the Number may be very very large ;-)

// Example
// For: Number = "4", result = "2".
// For: Number = "17", result = "4".
// For: Number = "101", result = "10".
// For: Number = "23232328323215435345345345343458098856756556809400840980980980980809092343243243243243098799634", result = "152421548093487868711992623730429930751178496967".

// Input/Output
// [input] string Number
// number in decimal form. 0 < Number < 10^100

// [output] a string
// integer squareroot of Number.
// '01 25 65 47 86 58 65 24'
// https://www.codewars.com/kata/58a3fa665973c2a6e80000c4

const Number =
  '2323232832321543534534534534345809885675655680940084098098098098080909234324324324324309879963423232328323215435345345345343458098856756556809400840980980980980809092343243243243243098799634232323283232154353453453453434580988567565568094008409809809809808090923432432432432430987996342323232832321543534534534534345809885675655680940084098098098098080909234324324324324309879963423232328323215435345345345343458098856756556809400840980980980980809092343243243243243098799634'
function integerSquareRoot(Number) {
  const length = Number.length
  if (Number < 100) return Math.floor(Math.sqrt(Number)).toString()
  let pairs = []
  let root = ''

  for (let i = 2; i < length; i = i + 2) {
    pairs.unshift(Number.substring(length - i, length - i + 2))
  }
  if (length % 2 === 0) pairs.unshift(Number.substring(0, 2))
  else pairs.unshift(Number.substring(0, 1))

  root += Math.floor(Math.sqrt(pairs[0])).toString() // the first digit

  let step = `${pairs[0] - Math.pow(+root, 2)}` // the first step before the loop

  for (let pair = 1; pair < pairs.length; pair++) {
    let newRootDigit = 0
    let auxiliary = '0'
    let intermediateTerm

    step = step + pairs[pair] // string

    while (subtract(step, auxiliary) >= '0') {
      newRootDigit++

      //Calculating auxiliary
      intermediateTerm = multiply(root, '2')
      intermediateTerm += newRootDigit.toString()
      auxiliary = multiply(intermediateTerm, newRootDigit.toString())
    }

    newRootDigit--

    //Calculating auxiliary
    intermediateTerm = multiply(root, '2')
    intermediateTerm += newRootDigit.toString()
    auxiliary = multiply(intermediateTerm, newRootDigit.toString())

    root += newRootDigit.toString()
    step = subtract(step.toString(), auxiliary.toString())
  }

  return root
}

function subtract(a, b) {
  a = a.replace(/^0+/, '')
  b = b.replace(/^0+/, '')
  const aLength = a.length
  const bLength = b.length
  const diff = aLength - bLength
  let isMinus = false
  let borrow = 0
  let result = ''

  if (a === b) return '0'

  if (diff > 0) {
    for (i = 1; i <= diff; i++) b = '0' + b
  }
  if (diff < 0) {
    isMinus = true
    ;[a, b] = [b, a]
    for (i = 1; i <= Math.abs(diff); i++) b = '0' + b
  }

  if (diff == 0 && a < b) {
    ;[a, b] = [b, a]
    isMinus = true
  }

  const aArray = [...a]
  const bArray = [...b]

  for (digit = a.length - 1; digit >= 0; digit--) {
    if (+aArray[digit] < +bArray[digit]) {
      borrow = 10
      aArray[digit - 1] -= 1
    }
    result = (borrow + +aArray[digit] - +bArray[digit]).toString() + result
    borrow = 0
  }
  return isMinus ? '-' + result.replace(/^0+/, '') : result.replace(/^0+/, '')
}

function multiply(a, b) {
  let aa = a.split('').reverse()
  let bb = b.split('').reverse()

  let stack = []

  for (let i = 0; i < aa.length; i++) {
    for (let j = 0; j < bb.length; j++) {
      let m = aa[i] * bb[j]
      stack[i + j] = stack[i + j] ? stack[i + j] + m : m
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10
    let move = Math.floor(stack[i] / 10)
    stack[i] = num

    if (stack[i + 1]) stack[i + 1] += move
    else if (move != 0) stack[i + 1] = move
  }

  return stack
    .reverse()
    .join('')
    .replace(/^(0(?!$))+/, '')
}

console.log(integerSquareRoot(Number))
