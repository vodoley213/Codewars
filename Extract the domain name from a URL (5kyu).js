// ----- Extract the domain name from a URL (5kyu)----- 

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// https://www.codewars.com/kata/514a024011ea4fb54200004b

const url = 'http://www.zombie-bites.com'

function domainName(url) {
  const regexHTTP = /(http|ftp|https):\/\//
  let domain = url.replace(regexHTTP, '').replace('www.', '')

  return domain.split('.')[0]
}

console.log(domainName(url))
