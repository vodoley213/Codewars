// ----- Detect Pangram (4kyu) -----

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const string = 'The quick brown fox jumps over the lazy dog'
function isPangram(string) {
  const stringArray = [...string.toLowerCase()]
  const alphavetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const isPangram = alphavetArray.every(elem =>
    stringArray.some(element => element === elem)
  )
  return isPangram
}

console.log(isPangram(string))
