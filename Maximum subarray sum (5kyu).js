// ----- Maximum subarray sum (5kyu) -----

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const arr = [-4, 20]
// [6, 10, 34, 43, 29, 10, -41, 17, -3, 2, -27, 50, -8, -1, -49, -10, -32, 3, 13, 8, 49, 24, -23, 46, 42, -11, -2, 40, 35]
// startIndex = 0
// endIndex = 0
// k =
// sum = 155

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
  if (arr === []) return 0
  if (arr.every(num => num < 0)) return 0

  let result = []

  const index = arr.findIndex((num, index) => {
    if (num >= 0) return true
  })
  arr.splice(0, index)

  for (startIndex = 0; startIndex <= arr.length - 1; startIndex++) {
    for (endIndex = startIndex; endIndex <= arr.length - 1; endIndex++) {
      let sum = 0
      for (k = startIndex; k <= endIndex; k++) {
        sum = sum + arr[k]
      }
      result.push(sum)
    }
  }
  return Math.max(...result)
}

console.log(maxSequence(arr))
