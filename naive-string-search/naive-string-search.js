function naiveSearch(long, short) {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
}

console.log(naiveSearch("lorie loled", "lol"));
console.log(naiveSearch("ghfsdywwljskadj", "fdkl"));
console.log(naiveSearch("jammyammyammy", "ammy"));
