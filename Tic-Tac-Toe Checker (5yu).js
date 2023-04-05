// ----- Tic-Tac-Toe Checker (5yu) -----

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

//   [0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0],

board = [
  [1, 2, 0],
  [0, 1, 2],
  [0, 0, 1],
]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript

function isSolved(board) {
  const flatBoard = [...board[0], ...board[1], ...board[2]]
  const isNotFinished = flatBoard.some(spot => spot === 0)

  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const isXwon = winningPositions.some(variant => {
    return variant.every(position => flatBoard[position] === 1)
  })
  const isOwon = winningPositions.some(variant => {
    return variant.every(position => flatBoard[position] === 2)
  })

  if (isXwon) return 1
  if (isOwon) return 2
  if (isNotFinished) return -1
  if (isXwon && isOwon) return 0
  if (!isXwon && !isOwon) return 0
}

console.log(isSolved(board))
