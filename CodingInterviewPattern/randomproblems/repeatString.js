function repeatString(str, n) {
    let newString = ""
    for (let i = 0; i < str.length; i++) {
        newString += str
    }
    return newString;
}

console.log(repeatString('hey', 3)) // 'heyheyhey'