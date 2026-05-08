export function is_palindrome_valid(s) {
}

const isAlphaNumeric = (c) => /^[a-z0-9]+$/i.test(c);

console.log(is_palindrome_valid("racecar")); // true
console.log(is_palindrome_valid("a dog! a panic in a pagoda.")); // true
console.log(is_palindrome_valid("")); // true
console.log(is_palindrome_valid("ab")); // false
console.log(is_palindrome_valid("21.02.2021")); // false
