//push, pop, shift, unshift, get, set, insert, remove, reverse

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("goodbye");
list.push("welcome");
list.push("hi");
console.log(list.insert(3, 'insert'), 'list get')

// console.log(list.reverse(), "list reverse");
console.log(list);

// list.unshift("unshift?")
// console.log(list.get(2));
// console.log(list, "list");
