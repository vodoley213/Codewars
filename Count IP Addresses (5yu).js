// ----- Count IP Addresses (5yu) -----

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

// https://www.codewars.com/kata/526989a41034285187000de4/javascript

const start = '10.11.12.13'
const end = '10.11.13.0'

function ipsBetween(start, end) {
  const arrayStart = start.split('.')
  const arrayEnd = end.split('.')

  const startDecimal =
    +arrayStart[0] * Math.pow(256, 3) +
    +arrayStart[1] * Math.pow(256, 2) +
    +arrayStart[2] * 256 +
    +arrayStart[3]
  const endDecimal =
    +arrayEnd[0] * Math.pow(256, 3) +
    +arrayEnd[1] * Math.pow(256, 2) +
    +arrayEnd[2] * 256 +
    +arrayEnd[3]

    return endDecimal - startDecimal
}

console.log(ipsBetween(start, end))
