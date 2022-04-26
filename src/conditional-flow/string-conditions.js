// This function should return true if the passed string is equal to "Hello"
// TODO: write code in this function body to pass the tests

function isHello(val1) {
  return val1 === "Hello";
}

// This function should return true if the passed string is not equal to "Hello"
// TODO: write code in this function body to pass the tests
function isNotHello(val1) {
  return val1 !== "Hello";
}

// This function should return true if the string val1 is is longer
// than string val2
// TODO: write code in this function body to pass the tests

function isLongerThan(val1, val2) {
  return val1.length > val2.length;
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

// TODO: write code in this function body to pass the tests

function hasOddNumberVowels(val1) {
  const vowels = ["a", "e", "i", "o", "u"];
  let total = 0;
  for (let i = 0; i < val1.length; i++) {
    if (vowels.includes(val1[i].toLowerCase())) {
      total++;
    }
  }
  return Boolean(total % 2);
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

// TODO: write code in this function body to pass the tests
function getMiddleLetter(val1) {
  if (val1.length % 2 === 0) {
    return val1[val1.length / 2 - 1] + val1[val1.length / 2];
  } else {
    return val1[(val1.length + 1) / 2 - 1];
  }
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
// TODO: write code in this function body to pass the tests
function seasonForMonth(monthName) {
  let season = "";
  switch (monthName) {
    case "March":
      season = "Spring";
      break;
    case "April":
      season = "Spring";
      break;
    case "May":
      season = "Spring";
      break;
    case "June":
      season = "Summer";
      break;
    case "July":
      season = "Summer";
      break;
    case "August":
      season = "Summer";
      break;
    case "September":
      season = "Autumn";
      break;
    case "October":
      season = "Autumn";
      break;
    case "November":
      season = "Autumn";
      break;
    case "December":
      season = "Winter";
      break;
    case "January":
      season = "Winter";
      break;
    case "February":
      season = "Winter";
      break;
  }
  return season;
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth,
};
