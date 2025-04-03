class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		//add to end
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.tail) return undefined;

		let poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let prev = this.tail.prev;
			prev.next = null;
			this.tail = prev;
		}

		this.length--;
		poppedNode.prev = null;
		return poppedNode;
	}

	shift() {
		if (!this.head) return undefined;

		let oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
			this.length--;
			return oldHead;
		}
	}
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(99);
console.log(list.pop(), "pop node");

// list.remove(1);
console.log(list);
