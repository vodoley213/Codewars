// ----- Highest Scoring Word (6kyu) -----

// Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const arrayFromX = x.split(' ')

  let highestScoringWord = arrayFromX[0]

  let maxLength = 0
  arrayFromX.forEach((word, index) => {
    const wordLength = word.split('').reduce((sum, symbol) => {
      sum += 1 + alphabetArray.indexOf(symbol)
      return sum
    }, 0)
    if (wordLength > maxLength) {
      maxLength = wordLength
      highestScoringWord = word
    }
  })
  console.log('a'.charCodeAt())
  return highestScoringWord
}

console.log(high('what time are we climbing up the volcano'))
