// ----- Battleship field validator (3kyu) -----

// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// 1) There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// 2) Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata.

// 1 battleship (size of 4 cells)
// 2 cruisers (size 3)
// 3 destroyers (size 2)dfgdfgd
// 4 submarines (size 1)

// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

const field = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function validateBattlefield(field) {
  SHIPS = {
    '4deck': [1, 0], // [required numbers , actual numbers]
    '3deck': [2, 0],
    '2deck': [3, 0],
    '1deck': [4, 0],
  }

  // check contacts of the ships
  for (row = 0; row <= 8; row++) {
    for (column = 0; column <= 8; column++) {
      if (
        (field[row][column] === 1 && field[row + 1][column + 1] === 1) ||
        (field[row][column + 1] === 1 && field[row + 1][column] === 1)
      )
        return false
    }
  }
  // check the number of the ships
  for (row = 0; row <= 8; row++) {
    for (column = 0; column <= 8; column++) {
      if (field[row][column] === 1) {
        // check for horisontal:
        if (field[row][column + 1] === 1) {
          field[row][column] = 0
          let count = 1
          while (field[row][column + count] === 1) {
            field[row][column + count] = 0
            count++
          }
          SHIPS[`${count}deck`][1]++
        }

        // check for vertical:
        else if (field[row + 1][column] === 1) {
          field[row][column] = 0
          let count = 1
          while (field[row + count][column] === 1) {
            field[row + count][column] = 0
            count++
          }
          SHIPS[`${count}deck`][1]++
        }
        // check for singledecks
        else {
          field[row][column] = 0
          SHIPS[`${1}deck`][1]++
        }
      }
    }
  }
  // check the rest of singledecks
  let count = 0
  while (count <= 9) {
    if (field[9][count] === 1) {
      field[9][count] = 0
      SHIPS[`${1}deck`][1]++
    }
    if (field[count][9] === 1) {
      field[count][9] = 0
      SHIPS[`${1}deck`][1]++
    }
    count++
  }

  // check required number and actual number of ships
  for (let ship in SHIPS) {
    if (SHIPS[ship][0] !== SHIPS[ship][1]) return false
  }

  return true
}
console.log(validateBattlefield(field))
