const convertToCelsius = function(number) {
  let celsiusNumber = (number - 32) * (5/9);
  let roundedCelsius = Math.round(celsiusNumber * 10) / 10;
  return roundedCelsius
};

const convertToFahrenheit = function(number) {
  let fahrenheitNumber = (number * 9/5) + 32;
  let roundedFahrenheit = Math.round(fahrenheitNumber * 10) / 10;
  return roundedFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
