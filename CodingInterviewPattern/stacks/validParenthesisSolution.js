function isValidParentheses(str) {
	const stack = [];

	const pairs = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	const openings = new Set(Object.values(pairs));

	for (const char of str) {
		if (openings.has(char)) {
			stack.push(char);
		} else {
			if (!stack.length) {
				return false;
			}

			const top = stack.pop();

			if (top !== pairs[char]) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

// console.log(isValidParentheses("()")); // true
// console.log(isValidParentheses("()[]{}")); // true
// console.log(isValidParentheses("(]")); // false
// console.log(isValidParentheses("([)]")); // false
// console.log(isValidParentheses("{[]}")); // true

console.log(isValidParentheses("([]{})")); //true
console.log(isValidParentheses("([]{)}")); //false
console.log(isValidParentheses("")) // false
