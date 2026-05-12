function isValidParentheses(str) {
	const stack = [];

	const pairs = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (let char of str) {
		if (char === "(" || char === "{" || char === "[") {
			stack.push(char);
		} else {
			if (stack.length === 0) return false;

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
console.log(isValidParentheses("")); //false
