/* Write a function called binarySearch which accepts a sorted array and a 
value and returns the index at which the value exists. Otherwise, return -1. */

function binarySearch(arr, elem) {
	
}

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4

console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		10
	)
); // 2)
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		95
	)
); // 16)
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		100
	)
); // -1)
