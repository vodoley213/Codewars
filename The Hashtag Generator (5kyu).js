// ----- The Hashtag Generator (5kyu) -----

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// EXAMPLES:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// https://www.codewars.com/kata/52449b062fb80683ec000024/javascript

const str = "a".repeat(140)

function generateHashtag(str) {
  const regex = /[a-zA-Z]{1,}/

  if (!regex.test(str)) return false
  let result = ''

  while (regex.test(str)) {
    const word = str.match(regex)
    str = str.replace(word, '')
    result += word[0].charAt(0).toUpperCase() + word[0].slice(1)
  }
  if (result.length > 139) return false
  return '#' + result
}

console.log(generateHashtag(str))
