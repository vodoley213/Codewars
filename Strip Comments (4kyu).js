// ----- Strip Comments (4kyu) -----

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// apples, pears
// ngrapes
// nbananas
// apples, pears\ngrapes\nbananas

// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// apples, plums
// \npears
// \noranges
// apples, plums\npears\noranges

// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
// Q @b
// \nu
// \ne -e f g", ["@", "-"]
// Q\nu\ne

// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const input = 'apples, plums % and bananas\npears\noranges !applesauce'
const markers = ['%', '!']

function solution(input, markers) {
  let inputArray = []

  inputArray = input.split('\n')

  markers.forEach(marker => {
    for (line = 0; line < inputArray.length; line++) {
      const index = inputArray[line].indexOf(marker)
      if (index !== -1) inputArray[line] = inputArray[line].substring(0, index)

      inputArray[line] = inputArray[line].replace(/(\s+)$/, '')
    }
  })

  return inputArray.join('\n')
}
console.log(solution(input, markers))
