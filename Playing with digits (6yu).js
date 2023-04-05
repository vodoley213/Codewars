// ----- Playing with digits (6yu) -----

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// Is there an integer k such as: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k

// digPow will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288(n) --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288(n) * 51(k)
// https://www.codewars.com/kata/playing-with-digits/javascript

const n = 462882
const p = 3

function digPow(n, p) {
  const arrayFromNumber = [...String(n)]
  let sum = 0
  let i = 0
  arrayFromNumber.forEach(item => {
    sum += Math.pow(+item, p + i)
    i++
  })
  console.log(sum)
  let k = 1
  while (n * k <= sum) {
    if (n * k === sum) return k
    k++
  }
  return -1
}

console.log(digPow(n, p))