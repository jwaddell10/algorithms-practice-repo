function sumOfDigits(digits) {
	if (digits.length === 0) return 0;

	return digits[0] + sumOfDigits(digits.slice(1));
}

console.log(sumOfDigits([1, 2, 3, 4])); //10
console.log(sumOfDigits([2, 54, 6, 2])); // 64