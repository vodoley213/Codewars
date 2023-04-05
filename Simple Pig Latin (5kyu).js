// ----- Land perimeter (5kyu) -----

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// https://www.codewars.com/kata/520b9d2ad5c005041100000f

const str = 'Hello world !'

function pigIt(str) {
  const strArray = str.split(' ')

  const result = strArray.map(word => {
    if (/\W+/.test(word)) return word

    const wordArr = word.split('')
    const firstLetter = wordArr.splice(0, 1)
    wordArr.push(`${firstLetter}ay`)
    return wordArr.join('')
  })

  return result.join(' ')
}

pigIt(str)
