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

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	reverse() {
		if (!this.head) return undefined;
		let newHead = this.head;
		this.head = this.tail;
		this.tail = newHead;

		let next = null;
		let prev = null;

		while(newHead !== null) {
			next = newHead.next;
			newHead.next = prev;
			prev = newHead;
			newHead = next;
		}

		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return false;

		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			counter++;
			current = current.next;
		}

		return current;
	}
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.get(2), 'get')// console.log(list.insert(3, 'insert'), 'list get')

// console.log(list.reverse(), "list reverse");
console.log(list);

// list.unshift("unshift?")
// console.log(list.get(2));
// console.log(list, "list");
