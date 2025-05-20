const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i<array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(num1, num2) {
  return num1*num2;
};

const power = function(num, power) {
	let total = 0;
  for (let p = 0; p < power; p++){
    total *= num;
  }
  return total;
};

const factorial = function(num) {
  let total = num;
  for (let n = num; n > 0; n--){
    total *= (num-n);
  }
  return total;
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
