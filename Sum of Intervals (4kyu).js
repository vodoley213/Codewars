// ----- Sum of Intervals (4kyu) -----

// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

// [1, 5]
// [1, 3]
// [1, 6]
// [5, 11]
// [10, 20]
// [16, 19]

// [1, 6]
// [5, 11]
// [10, 20]
// [16, 19]

const intervals = [
  [1, 1147483640],
  [147483640, 87483640],
  [1147483643, 2147483647],
]

function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let flag = true

  while (intervals.length > 1 && flag === true) {
    flag = false
    if (intervals[1][1] <= intervals[0][1]) {
      intervals[1][0] = intervals[0][0]
      intervals[1][1] = intervals[0][1]
      intervals.shift()
      flag = true
    }

    if (
      intervals.length > 1 &&
      intervals[1][0] < intervals[0][1] &&
      intervals[1][1] > intervals[0][1]
    ) {
      intervals[1][0] = intervals[0][0]
      intervals.shift()
      flag = true
    }
  }
  let countLength = 0
  intervals.forEach(([start, end]) => {
    countLength += end - start
  })
  return countLength
}

console.log(sumIntervals(intervals))
