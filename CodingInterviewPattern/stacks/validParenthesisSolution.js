function isValidParentheses(str) {
	const stack = [];

	const pairs = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let char of str) {
		// opening brackets
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
		}

		// closing brackets
		else {
			// no matching opening bracket
			if (stack.length === 0) {
				return false;
			}

			const top = stack.pop();

			// wrong matching type
			if (top !== pairs[char]) {
				return false;
			}
		}
	}

	// stack should be empty at end
	return stack.length === 0;
}

// console.log(isValidParentheses("()")); // true
// console.log(isValidParentheses("()[]{}")); // true
// console.log(isValidParentheses("(]")); // false
// console.log(isValidParentheses("([)]")); // false
// console.log(isValidParentheses("{[]}")); // true

console.log(isValidParentheses("([]{})")); //true
console.log(isValidParentheses("([]{)}")); //false
