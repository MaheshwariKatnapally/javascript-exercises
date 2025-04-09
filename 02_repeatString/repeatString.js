const repeatString = function (text, num) {
  if (num < 0) {
    return "ERROR";
  }
  let temp = "";
  for (i = 0; i <= num; i++) {
    temp += text;
  }
  return temp;
};

// Do not edit below this line
module.exports = repeatString;
