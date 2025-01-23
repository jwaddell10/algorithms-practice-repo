function sameFrequency(num1, num2) {
	const number1String = num1.toString();
	const number2String = num2.toString();

	if (number1String.length !== number2String.length) {
		return false;
	}

	const frequencyCounter = {};
	for (let i = 0; i < number1String.length; i++) {
		let number = number1String[i];
		frequencyCounter[number]
			? (frequencyCounter[number] += 1)
			: (frequencyCounter[number] = 1);
	}

	for (let i = 0; i < number2String.length; i++) {
		let number = number2String[i];
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
