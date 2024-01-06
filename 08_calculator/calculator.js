const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(x) {
	if (x.length === 0) {
    return 0
  }
  let y = 0;

  for (let i = 0; i < x.length; i++) {
    y += x[i];
  }

  return y;
  };

const multiply = function(array) {
  let x = (array[0] * array[1]);
  if (array.length >= 3) {
    for (let i = 2; i <= (array.length - 1); i++) {
      x *= array[i];
  }}
  return x
};

// iterate as many times as they are variables

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
  let newArray = [];
  for (let i = 1; i <= a; i++) {
    newArray.push(i);
  }
	if (newArray.length === 0 || newArray.length === 1) {
    return 1
  } else {
    let x = (newArray[0] * newArray[1]);
  if (newArray.length >= 3) {
    for (let i = 2; i <= (newArray.length - 1); i++) {
      x *= newArray[i];
  }} return x }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
