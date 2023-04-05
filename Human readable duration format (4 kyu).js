// ----- Human readable duration format (4 kyu) -----

// Human readable duration format
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript

const seconds = 1330240
//  hour, 1 minute and 2 seconds

function formatDuration(seconds) {
  if (seconds === 0) return 'now'
  const YEAR_IN_SECOND = 31536000
  const DAY_IN_SECOND = 86400
  const HOUR_IN_SECONDS = 3600
  const MINUTE_IN_SECONDS = 60

  let result = ''
  const time = []

  // Years
  time[0] = Math.floor(seconds / YEAR_IN_SECOND)
  // Days
  time[1] = Math.floor((seconds - time[0] * YEAR_IN_SECOND) / DAY_IN_SECOND)
  // Hours
  time[2] = Math.floor(
    (seconds - time[0] * YEAR_IN_SECOND - time[1] * DAY_IN_SECOND) /
      HOUR_IN_SECONDS
  )
  // Minutes
  time[3] = Math.floor(
    (seconds -
      time[0] * YEAR_IN_SECOND -
      time[1] * DAY_IN_SECOND -
      time[2] * HOUR_IN_SECONDS) /
      MINUTE_IN_SECONDS
  )
  // Seconds
  time[4] =
    seconds -
    time[0] * YEAR_IN_SECOND -
    time[1] * DAY_IN_SECOND -
    time[2] * HOUR_IN_SECONDS -
    time[3] * MINUTE_IN_SECONDS

  if (time[0] !== 0 && time[0] === 1) {
    result += `${time[0]} year`
  }
  if (time[0] !== 0 && time[0] !== 1) {
    result += `${time[0]} years`
  }
  if (time[1] !== 0 && time[1] === 1) {
    result += `, ${time[1]} day`
  }
  if (time[1] !== 0 && time[1] !== 1) {
    result += `, ${time[1]} days`
  }
  if (time[2] !== 0 && time[2] === 1) {
    result += `, ${time[2]} hour`
  }
  if (time[2] !== 0 && time[2] !== 1) {
    result += `, ${time[2]} hours`
  }
  if (time[3] !== 0 && time[3] === 1) {
    result += `, ${time[3]} minute`
  }
  if (time[3] !== 0 && time[3] !== 1) {
    result += `, ${time[3]} minutes`
  }
  if (time[4] !== 0 && time[4] === 1) {
    result += ` and ${time[4]} second`
  }
  if (time[4] !== 0 && time[4] !== 1) {
    result += ` and ${time[4]} seconds`
  }

  const pannern1 = /^,\s/
  const pannern2 = /^\sand\s/
  const pannern3 = /,\s\d{1,}\s[a-z]{1,}$/
  const lastCommar = result.match(pannern3)

  if (lastCommar !== null) {
    const lastEnd = lastCommar[0].replace(', ', ' and ')
    return result
      .replace(pannern1, '')
      .replace(pannern2, '')
      .replace(lastCommar, lastEnd)
  }

  return result.replace(pannern1, '').replace(pannern2, '')
}

console.log(formatDuration(seconds))
