// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {
  // TODO: write code in this function body to pass the tests
  // return (val1 === 'Hello')
  if (val1 === "Hello") return true;
   return false;
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {
  // TODO: write code in this function body to pass the tests
  // return (val1 !== 'Hello')
  if (val1 !== "Hello") return true;
  return false;
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {
  // TODO: write code in this function body to pass the tests
  if (val1.length > val2.length) return true;
  return false;
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {
  // TODO: write code in this function body to pass the tests
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  let total = 0
  for (let i = 0; i < val1.length; i++) {
    if (VOWELS.includes(val1[i].toLowerCase())) {
      total++
    }
  }
  return Boolean(total % 2)
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests

  let mid = Math.round(val1.length / 2)
  let chars = ""
  if (val1.length % 2 === 0) {
    chars += val1[mid - 1]
    chars += val1[mid]
  }
  else {
    chars += val1[mid - 1]
  }
  return chars
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth (monthName) {
  // TODO: write code in this function body to pass the tests
  switch (monthName) {
    case (monthName = "January"):
      return "Winter";
      break;
    case (monthName = "February"):
      return "Winter";
      break;
    case (monthName = "December"):
      return "Winter";
      break;
    case (monthName = "March"):
      return "Spring";
      break;
    case (monthName = "April"):
      return "Spring";
      break;
    case (monthName = "May"):
      return "Spring";
      break;
    case (monthName = "June"):
      return "Summer";
      break;
    case (monthName = "July"):
      return "Summer";
      break;
    case (monthName = "August"):
      return "Summer";
      break;
    case (monthName = "September"):
      return "Autumn";
      break;
    case (monthName = "October"):
      return "Autumn";
      break;
    case (monthName = "November"):
      return "Autumn";
      break;
      default:
      return "";
  }
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
