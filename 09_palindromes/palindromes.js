const palindromes = function (str) {
  // remove non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // reverse str
  reversedString = str.split("").reverse().join("");

  return str === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
