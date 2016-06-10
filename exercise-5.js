// Write a JavaScript program that reverses the values in an array.

// Hint: You will need to use a temporary variable to "hold on" to values while they are being swapped. Instead of iterating over the whole array, try using array.length / 2.

// var array = ['twenty', 'minutes', 'ago', 'squirrels'];
// var temp = array[i];

// for (var i = array.length - 1; i > array.length; i--) {
// 	array[i] = array[0];
// 	array[0] = temp;
// }

// console.log(array);  <--- my wrongness


// array[0] = array[3];
// 	array[3] = temp;
// 	temp = array[1];
// 	array[1] = array[2];
// 	array[2] = temp;

// var arr = ['hello', 'world'];
// var temp = arr[0];


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var temp;

for (var i = 0; i < array.length / 2; i++) {
	temp = array[i];
	array[i] = array[array.length - 1 - i];
	array[array.length - 1 - i] = temp;
}

console.log(array);