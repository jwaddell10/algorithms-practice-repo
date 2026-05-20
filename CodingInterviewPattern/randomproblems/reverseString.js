function reverseString(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    let reversed = ""

    for (let i = 0; i < str.length; i++) {
        reversed += stack.pop();
    }
}

console.log(reverseString('abcde'))