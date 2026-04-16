export function is_palindrome_valid(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left > right && !isAlphaNumeric(s[right])) right--;
    if (s[left] === s[right]) {
        left++;
        right--;
    }

    if (s[left] !== s[right]) {
        return false;
    }
    left++
    right--
  }
  return true;
}

const isAlphaNumeric = (c) => /^[a-z0-9]+$/i.test(c);

console.log(is_palindrome_valid("a dog! a panic in a pagoda."))