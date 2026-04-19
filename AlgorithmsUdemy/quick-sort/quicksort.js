function pivot(arr, start = 0, end = arr.length - 1) {
	function swap(array, i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);

		//left
		quickSort(arr, left, pivotIndex - 1);

		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

/* pivot helper */

//first implement a function responsible for arranging
//elements in an array on either side of a pivot

/* 
    1. It will accept 3 arguments: an array, start index, end index
    2. grab pivot from start of the array
    3. Store pivot index in a variable
    4. Loop from array from start -> end
        --if pivot is > current element, increment the pivot
        index variable, then swap the current element with 
        element at pivot index
*/

/* quicksort pseudocode */

/* 1. call pivot helper on the array
    2. When the helper returns you to the updated pivot index, recursively call the pivot helper
    on the subarray to the left of that index, and the subarray to the right of that index
    3. your base case occurs when you have less than 2 elements
*/
