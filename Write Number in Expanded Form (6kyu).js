// ----- Write Number in Expanded Form (6kyu) -----

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
// https://www.codewars.com/kata/5842df8ccbd22792a4000245

const num = 420370022
function expandedForm(num) {

  const numberOfDigits = num.toString().length
  let output = ''

  for (i = numberOfDigits; i >= 1; i--) {
    output +=
      num.toString()[numberOfDigits - i] == 0
        ? ''
        : ` + ${num.toString()[numberOfDigits - i]}${'0'.repeat(i - 1)}`
  }
  return output.replace(/^\s\+\s/, '')
}

console.log(expandedForm(num))
