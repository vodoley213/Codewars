// ----- Next smaller number with the same digits (4kyu) -----

// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// nextSmaller(907) == 790
// nextSmaller(2071) == 2017
// nextSmaller(414) == 144
// nextSmaller(123456798) == 123456789
// nextSmaller(1234567908) == 1234567890

// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(123456789) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

// some tests will include very large numbers.
// test data only employs positive integers.

// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

const n = 2071

function nextSmaller(n) {
  const arrayFromInteger = [...n.toString()]

  const lastIndex = arrayFromInteger.findLastIndex(
    (elem, index) => arrayFromInteger[index - 1] > arrayFromInteger[index]
  )

  if (lastIndex === -1) return -1

  const restDigits = arrayFromInteger.splice(lastIndex)

  const findSmallDigit = restDigits
    .sort((a, b) => b - a)
    .find((elem, index) => {
      if (elem < arrayFromInteger[lastIndex - 1]) {
        restDigits.splice(index, 1)
        return true
      }
    })

  const deletedDigit = arrayFromInteger.splice(lastIndex - 1, 1, findSmallDigit)

  restDigits.push(...deletedDigit)
  restDigits.sort((a, b) => b - a)

  const finalArray = [...arrayFromInteger, ...restDigits]
  if (finalArray[0] == 0) return -1
  return +finalArray.join('')
}

console.log(nextSmaller(n))
