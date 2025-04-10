// // if (index < 0 || index >= buckets.length) {
// // 	throw new Error("Trying to access index out of bounds");
// // }

// class HashMap {
// 	constructor(maxLoadFactor = 0.75, initialCapacity = 16) {
// 		this.loadFactor = maxLoadFactor;
// 		this.capacity = initialCapacity;
// 		this.bucket = new Array(this.capacity);
// 	}

// 	hash(key) {
// 		let hashCode = 0;
// 		const prime = 31;
// 		for (let i = 0; i < key.length; i++) {
// 			hashCode = (hashCode * prime + key.charCodeAt(i)) % this.capacity;
// 		}
// 		return hashCode;
// 	}

// 	set(key, value) {
// 		const index = this.hash(key);
// 		const bucket = this.bucket[index];

// 		// Check if key exists and update it
// 		for (let i = 0; i < bucket.length; i++) {
// 			const [storedKey, _] = bucket[i];
// 			if (storedKey === key) {
// 				bucket[i][1] = value;
// 				return;
// 			}
// 		}

// 		bucket.push([key, value]);
// 		this.size++;
// 	}
// }

function stringToNumber(string) {
	let hashCode = 0;
	for (let i = 0; i < string.length; i++) {
		hashCode += string.charCodeAt(i);
	}

	return hashCode;
}

function hash(name, surname) {
	return stringToNumber(name) + stringToNumber(surname);
}
console.log(hash('Jonathan', 'Waddell'))

console.log(hash('Jonathan', 'Waddells'))
// const test = new HashMap();
// test.set("key", "value");
// console.log(test, "hashmap test");
