/*Write a function sameFrequency(num1, num2) that takes in two positive integers. The function 
should return true if the two numbers have the same frequency of digits, and false otherwise.*/

function sameFrequency(num1, num2) {
	const num1ToString = num1.toString();
	const num2ToString = num2.toString();

	if (num1.length !== num2.length) return false;

	const frequencyCounter = {};

	for (let i = 0; i < num1ToString.length; i++) {
		let number = num1ToString[i];
		frequencyCounter[number]
			? (frequencyCounter[number] += 1)
			: (frequencyCounter[number] = 1);
	}

	for (let i = 0; i < num2ToString.length; i++) {
		let number = num2ToString[i];

		if (!frequencyCounter[number]) {
			return false;
		} else {
			frequencyCounter[number] -= 1;
		}
	}
	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
