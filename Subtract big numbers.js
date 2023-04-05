// ----- Subtract big numbers (5kyu) -----

// Subtract big numbers passed as strings

// Arguments are passed as strings
// Result should be returned as string
// 3 - 2 should return 1 while 2 - 3 should return -1
// Zeros should not preceed a number! 02, -02, 0001 are invalid
// Very large numbers will be tested
// Note: 100 randomly generated tests
// https://www.codewars.com/kata/55db23c6ab208d61e10000af

const a = '0000001'
const b = '3'

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
console.log(subtract(a, b))
