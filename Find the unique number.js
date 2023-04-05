// ----- Find the unique number (6kyu) -----

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const arr = [0, 0, 0.55, 0, 0]

function findUniq(arr) {
  const uniqueNumber = arr.find(
    number => arr.indexOf(number) === arr.lastIndexOf(number)
  )
  return uniqueNumber
}

console.log(findUniq(arr))
