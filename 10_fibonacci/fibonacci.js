const fibonacci = function (pos) {
  pos = parseInt(pos);

  if (pos < 0) return "OOPS";

  if (pos === 1 || pos === 2) return 1;

  if (pos === 0) return 0;

  first = 1;
  second = 1;

  for (i = 3; i <= pos; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
};

// Do not edit below this line
module.exports = fibonacci;
