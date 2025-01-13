function validAnagram(string1, string2) {
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of string1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	for (let val of string2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	if (
		Object.keys(frequencyCounter1).length === 0 &&
		Object.keys(frequencyCounter2).length === 0
	) {
		return true;
	}

	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}
