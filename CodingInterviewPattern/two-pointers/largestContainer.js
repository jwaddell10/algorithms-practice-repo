// function largestContainer(n) {
// 	let max = 0;

// 	for (let i = 0; i < n.length; i++) {
// 		for (let j = i + 1; j < n.length; j++) {
// 			let max_water = Math.min(n[i], n[j]) * (j - i);
// 			max = Math.max(max, max_water);
// 		}
// 	}

// 	return max;
// }

function largestContainerTwoPointers(n) {
	let max_water = 0;
	let left = 0;
	let right = n.length - 1;

	while (left < right) {
		max_water = Math.max(
			max_water,
			Math.min(n[left], n[right]) * (right - left),
		);
		if (n[left] > n[right]) {
			right--;
		} else left++;

		//but, i might have the highest height already, so id skip it
		//if left is higher than right, right --
	}
	return max_water;
}

// console.log(largestContainer([2, 7, 8, 3, 7, 6])); // 24
console.log(largestContainerTwoPointers([2, 7, 8, 3, 7, 6])); // 24
console.log(largestContainerTwoPointers([])); // 0
console.log(largestContainerTwoPointers([1])); // 0
console.log(largestContainerTwoPointers([3, 3, 3, 3])); // 0
console.log(largestContainerTwoPointers([1, 2, 3])); // 2
console.log(largestContainerTwoPointers([3, 2, 1])); // 2
