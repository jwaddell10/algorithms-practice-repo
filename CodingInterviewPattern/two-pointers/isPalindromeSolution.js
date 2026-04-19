export function is_palindrome_valid(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isAlphaNumeric(s[left])) left++;
    while (!isAlphaNumeric(s[right])) right--;
    if (s[left] === s[right]) {
        left++;
        right--;
    } else if (s[left] !== s[right]) {
        return false;
    }
  }
  return true;
}

const isAlphaNumeric = (c) => /^[a-z0-9]+$/i.test(c);

// console.log(is_palindrome_valid("racecar")) // true
console.log(is_palindrome_valid("a dog! a panic in a pagoda.")) // true
// console.log(is_palindrome_valid("")) // true
// console.log(is_palindrome_valid("ab")) // false
// console.log(is_palindrome_valid("21.02.2021")) // false
