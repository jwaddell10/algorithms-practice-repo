// if (index < 0 || index >= buckets.length) {
// 	throw new Error("Trying to access index out of bounds");
// }

class HashMap {
	constructor(maxLoadFactor = 0.75, size = 16) {
		this.capacity = maxLoadFactor;
		this.buckets = new Array(size);
		this.size = size;
	}

	hash(name) {
		return key(i)
	}

	set(key, value) {
		let index = this.hash(key);
		let bucket = this.buckets[index];

		if (!bucket) {
			bucket = [];
			this.buckets[index] = bucket;
		}

		// Check if key exists already
		for (let i = 0; i < bucket.length; i++) {
			let pair = bucket[i];
			if (pair[0] === key) {
				pair[1] = value; // update
				return;
			}
		}

		// If not found, add new key-value pair
		bucket.push([key, value]);
	}

	get(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		let value;

		for (let i = 0; i < bucket.length; i++) {
			let pair = bucket[i];
			if (pair[0] === key) {
				return pair[1];
			}
		}

		return undefined;
	}

	has(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];

		for (let i = 0; i < bucket.length; i++) {
			let pair = bucket[i];
			if (pair[0] === key) {
				return true;
			}
		}

		return false;
	}

	remove(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];

		for (let i = 0; i < bucket.length; i++) {
			let pair = bucket[i];
			if (pair[0] === key) {
				bucket.splice(i, 1);
				return true;
			}
		}

		return false;
	}

	length() {
		let count = 0;

		for (let i = 0; i < this.buckets.length; i++) {
			let bucket = this.buckets[i];
			if (bucket) {
				count += bucket.length;
			}
		}

		return count;
	}

	clear() {
		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = undefined;
		}
	}

	keys() {
		let keyArray = [];

		for (let i = 0; i < this.buckets.length; i++) {
			let bucket = this.buckets[i];
			if (bucket) {
				for (let j = 0; j < bucket.length; j++) {
					let pair = bucket[j];
					keyArray.push(pair[0]); // grab the key
				}
			}
		}

		return keyArray;
	}

	values() {
		let valueArray = [];

		for (let i = 0; i < this.buckets.length; i++) {
			let bucket = this.buckets[i];
			if (bucket) {
				for (let j = 0; j < bucket.length; j++) {
					valueArray.push(bucket[j][1]);
				}
			}
		}

		return valueArray;
	}

	entries() {
		let entriesArray = [];

		for (let i = 0; i < this.buckets.length; i++) {
			let bucket = this.buckets[i];

			if (bucket) {
				entriesArray.push(bucket);
			}
		}

		return entriesArray;
	}
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// console.log(test.remove("key"));
// console.log(test.clear(), "length");
console.log(test, "test");
// console.log(test, "hashmap test");
