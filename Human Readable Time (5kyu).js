// ----- Human Readable Time (5kyu) -----

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript

seconds = 356
function humanReadable(seconds) {
  const time = []
  time[0] = Math.floor(seconds / 3600)
  time[1] = Math.floor((seconds - time[0] * 3600) / 60)
  time[2] = seconds - time[0] * 3600 - time[1] * 60

  for (i = 0; i < 3; i++) {
    if (time[i].toString().length === 1) time[i] = `0${time[i].toString()}`
  }

  return `${time[0]}:${time[1]}:${time[2]}`
}

console.log(humanReadable(seconds))
