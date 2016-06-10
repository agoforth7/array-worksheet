// Write a JavaScript program that will determine the index of the first value of 'stop' in an array.

var array = ['beans', 'cheese', 'stop', 'onion', 'pickle'];
var result;

for (var i = 0; i < array.length; i++) {
	if (array[i] === 'stop') {
		result = i;
		break;
	}
}

console.assert(result = 3);