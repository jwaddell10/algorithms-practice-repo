/*Given an array of integers and a number num, find the maximum sum of any contiguous 
subarray of size num. If the array length is smaller than num, return null.*/

function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;

	if (arr.length < num) return null;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	console.log(tempSum, "original tempsum");

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
