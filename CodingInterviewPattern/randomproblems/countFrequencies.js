//Given an array, return how many times each element appears.

const arr = ["a", "b", "a", "c", "b", "a"];

function countFrequencies(arr) {
	//array
	// create a map, if the key exists, increment count by 1, otherwise, create key
	const count = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (count.has(arr[i])) {
			count.set(arr[i], count.get(arr[i]) + 1);
		} else {
			count.set(arr[i], 1);
		}
	}
	return count;
}

console.log(countFrequencies(arr)); /* {
  a: 3,
  b: 2,
  c: 1
} */
