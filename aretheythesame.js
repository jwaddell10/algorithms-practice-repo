function comp(array1, array2) {
	if (array1 === null || array2 === null) return false;
	//array 1[i] * array1[i] = array2 at the index i
	return array1
		.sort((a, b) => a - b)
		.map((x) => x * x)
		.every((element, i) => array2.sort((a, b) => a - b).includes(element, i));
}

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

a = [7, 10, 1, 10, 3, 6, 1, 7, 6, 1, 0, 8, 1, 4, 5, 4, 10, 2, 2, 5, 3, 4, 0];
b = [
	49, 36, 1, 16, 36, 49, 4, 0, 25, 16, 1, 0, 25, 100, 100, 1, 16, 9, 100, 1,
	4, 9, 64,
];
console.log(comp(a, b));
