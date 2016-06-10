// Write a JavaScript program that will multiply each number in an array of numbers by the following (next) number. The last value in the array should stay the same.

var array = [3, 8, 12, 19];
var i = 0;

while (i < array.length - 1) {
	array[i] *= array[i + 1];
	// array[i] = array[i] * array[i + 1];
	i++;
}

console.assert(array[0] === 24);
console.assert(array[3] === 19);