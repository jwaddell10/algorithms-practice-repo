function nextGreater(arr) {
	//if number isnt greater, pop onto stack
	//if number is greater, add that to res

	const stack = [];
	const res = [];

	for (const n of arr) {
		console.log(n, "n");
	}
}

console.log(nextGreater([5, 2, 4, 6, 1])); // [6, 4, 6, -1, -1]
