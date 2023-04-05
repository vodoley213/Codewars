// ----- Which are in (6yu) -----

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.
// https://www.codewars.com/kata/550554fd08b86f84fe000a58

const a1 = ['wh', 'by', 'ou', '1.9', 'ect', 'omm', 'pini', 'oes', 'ple', 'ion']

const a2 = [
  'I',
  '1.9.2.',
  'the',
  'versioning;',
  'to',
  'questions',
  'reference',
  'using',
  'I',
  'have',
  'your',
  'In',
  'Ruby',
  '1.9?',
  'sample;',
  'known',
  'a',
  'neither',
  'I',
  'glad',
  'out',
  'opinion',
  'am',
  'here',
  '(mladen7s',
  'does',
  'you',
  'have',
  'the',
  'am',
  'for',
  'comment)',
  'browse',
]

function inArray(array1, array2) {
  const r = []
  array1.forEach(itemA1 => {
    array2.forEach(itemA2 => {
      if (itemA2.includes(itemA1) && !r.includes(itemA1)) r.push(itemA1)
    })
  })

  // Ручная сортировка массива r по возрастанию
  let temp
  for (let j = 0; j < r.length - 1; j++) {
    for (let i = 0; i < r.length - j - 1; i++) {
      if (r[i] > r[i + 1]) {
        temp = r[i + 1]
        r[i + 1] = r[i]
        r[i] = temp
      }
    }
  }
  // Ручная сортировка массива r по возрастанию. Конец
  return r.sort()
}
console.log(inArray(a1, a2))

function inArray2(array1, array2) {
  return array1
    .filter(itemA1 => array2.find(itemA2 => itemA2.includes(itemA1)))
    .sort()
}

console.log(inArray2(a1, a2))
