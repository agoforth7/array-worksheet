// Write a JavaScript program that determines the largest negative or positive number in an array of numbers.

var array = [-1, -2, 1];
var result = 0;

for (i = 0; i < array.length; i++) {
	if (Math.abs(array[i]) > Math.abs(result)) {
		result = array[i];
	}
}

console.assert(result === -2);