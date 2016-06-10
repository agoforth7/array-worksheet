// Write a JavaScript program that will reverse the order of words in a string.

var str = 'My cat eats expensive food';
var array = str.split(' ');
var str2 = '';

for (var i = array.length - 1; i >= 0; i--) {
	str2 = str2 + array[i] + ' ';
}

// console.log(str2);

// var str3 = 'a man a plan a canal panama';
// var str4 = '';

// for (var i = str3.length - 1; i >= 0; i--) {
// 	str4 += str3[i];
// }

// console.log(str4);

var str3 = 'My cat eats expensive food';
var word = '';
var output = '';

for (var i = 0; i <= str3.length; i++) {
	if (str3[i] === ' ' || i === str3.length) {
		output = word + ' ' + output;
		word = '';
	} else {
		word += str3[i];
	}
}

console.log(output);