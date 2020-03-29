function add (x,y) {
	return x + y;
}

function subtract (x, y) {
	return x-y;
}

function sum (inputList) {
	var total = 0;
	for (let i = 0; i < inputList.length; i++)
	{
		total += inputList[i];
	}
	return total;
}

function multiply (inputList) {
	var total = 1;
	for (var i = 0; i < inputList.length; i++)
	{
		total *= inputList[i];
	}
	return total;
}

function power(x, y) {
	return x**y;
}

function factorial(x) {
	var total = 1;
	for (let i = x; i > 0; i--)
	{
		total *= i
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}