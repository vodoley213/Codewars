// ----- Sort the odd (6kyu) -----

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const array = [1, 11, 2, 8, 3, 4, 5]
//            [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript

function sortArray(array) {
  const oddArray = array.filter(element => element % 2 !== 0).sort((a, b) => a - b)
  console.log(oddArray)
  let index = -1
  return array.map(element => {
    if (element % 2 === 0) return element
    else {
      index++
      return oddArray[index]
    }
  })
}

console.log(sortArray(array))
