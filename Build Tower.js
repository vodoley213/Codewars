// ----- Build Tower (6kyu) -----

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

const nFloors = 6
function towerBuilder(nFloors) {
  const tower = []
  for (let floor = 1; floor <= nFloors; floor++) {
    let stringFloor = ''

    const numberOfStarsInLine = floor * 2 - 1
    const numberOfSpacesOnSides = nFloors - floor

    stringFloor =
      ' '.repeat(numberOfSpacesOnSides) +
      '*'.repeat(numberOfStarsInLine) +
      ' '.repeat(numberOfSpacesOnSides)

    tower.push(stringFloor)
  }
  return tower
}

console.log(towerBuilder(nFloors))
