function XO(str) {
	//code here
	let one = 0;
	let two = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "o" || str[i] === "O") {
			one++;
		}
		if (str[i] === "x" || str[i] === "X") {
			two++;
		}
	}
    console.log(one, 'o', two, 'x')
	if (one === two) return true;
}


console.log(XO('xo'))