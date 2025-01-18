function areThereDuplicates(...args) {
	console.log(args.length, "arr");
	let lookup = {};

	for (let i = 0; i < args.length; i++) {
		let item = args[i];

		lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
	}
    const greaterThanOne = (element) => element > 1;
    
    return Object.values(lookup).some(greaterThanOne);
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
