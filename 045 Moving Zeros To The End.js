// ----- Moving Zeros To The End (5kyu) -----

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

const arr = [false, 1, 0, 1, 2, 0, 1, 3, 'a']
function moveZeros(arr) {
  const zeros = []
  let index
  while (index !== -1) {
    index = arr.indexOf(0)
    if (index !== -1) {
      zeros.push(0)
      arr.splice(index, 1)
    }
  }
  return([...arr,...zeros])
}
console.log(moveZeros(arr))
