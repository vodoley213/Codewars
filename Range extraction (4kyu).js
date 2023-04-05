// ----- Range extraction (4kyu) -----

// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

const list = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
]

// const list = [17, 18, 19, 20]

function solution(list) {
  let result = []
    while (list.length > 0) {
    const a1 = list[0]
    let index = 0
    while (Math.abs(list[index + 1] - list[index]) === 1) {
      index++
    }
    const a2 = list[index]
    list.splice(0, index + 1)
    if (a2 - a1 === 0) result.push(a1.toString())
    if (a2 - a1 === 1) {
      result.push(a1.toString())
      result.push(a2.toString())
    }
    if (a2 - a1 > 1) result.push(`${a1}-${a2}`)
    // console.log(result.join(','))
    // console.log(list)
  }
  return result.join(',')
}

console.log(solution(list))
