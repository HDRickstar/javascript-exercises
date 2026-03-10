const convertToCelsius = function(num) {
  let celcius = (num-32) * (5/9);
  return Number(celcius.toFixed(1));

};

const convertToFahrenheit = function(num) {
  let fahrenheith = (num * (9/5) +32);
  fahrenheith.toFixed(1);
  return Number(fahrenheith.toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
