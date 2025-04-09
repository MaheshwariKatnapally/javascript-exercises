const convertToCelsius = function (fahrenheit) {
  const convertedToCelcius = (fahrenheit - 32) * (5 / 9);
  return Math.round(convertedToCelcius * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  const convertedToFahrenheit = celsius * (9 / 5) + 32;
  return Math.round(convertedToFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
