// ----- Next bigger number with the same digits (4kyu) -----

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1
// https://www.codewars.com/kata/55983863da40caa2c900004e


const n = 144

function nextBigger(n) {
  const arrayFromInteger = [...n.toString()]

  const lastIndex = arrayFromInteger.findLastIndex(
    (elem, index) => arrayFromInteger[index - 1] < arrayFromInteger[index] // >
  )

  if (lastIndex === -1) return -1

  const restDigits = arrayFromInteger.splice(lastIndex)

  const findBigDigit = restDigits
    .sort((a, b) => a - b)
    .find((elem, index) => {
      if (elem > arrayFromInteger[lastIndex - 1]) {
        restDigits.splice(index, 1)
        return true
      }
    })

  const deletedDigit = arrayFromInteger.splice(lastIndex - 1, 1, findBigDigit)

  restDigits.push(...deletedDigit)
  restDigits.sort((a, b) => a - b)

  const finalArray = [...arrayFromInteger, ...restDigits]
  if (finalArray[0] == 0) return -1
  return +finalArray.join('')
}

console.log(nextBigger(n))
