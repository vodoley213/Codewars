// ----- Land perimeter (5kyu) -----

// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']

//  https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

const arr = [
  'OXOOO',
  'OOXXX',
  'OXXOO',
  'XOOOO',
  'XOOOO',
  'XXXOO',
  'XOXOO',
  'OOOXO',
  'OXOOX',
  'XOOOO',
  'OOOXO',
]

function landPerimeter(arr) {
  const arrArray = arr.map(line => line.split(''))
  let perimeter = 0

  arrArray.forEach((row, i) => {
    row.forEach((column, j) => {
      if (column === 'X') {
        perimeter = perimeter + 4
        if (i !== 0 && arrArray[i - 1][j] === 'X') perimeter--
        if (i !== arrArray.length - 1 && arrArray[i + 1][j] === 'X') perimeter--
        if (j !== 0 && arrArray[i][j - 1] === 'X') perimeter--
        if (j !== row.length - 1 && arrArray[i][j + 1] === 'X') perimeter--
      }
    })
  })
  return(`Total land perimeter: ${perimeter}`)
}

landPerimeter(arr)
