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
		if (!this.head) return undefined;

		let poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	shift() {
		//removes first item in array, return that item
		if (!this.head) return undefined;

		let oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
			this.length--;
		}

		return oldHead;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (!this.head) return undefined;

		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	set(index, val) {
		if (index < 0 || index >= this.length) return undefined;
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (this.length === 0) return this.unshift(val);
		if (this.length === index) return this.push(val);

		let newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		newNode.next = afterNode;
		newNode.prev = beforeNode;
		afterNode.prev = newNode;
		beforeNode.next = newNode;
		this.length++;
		return this;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode = this.get(index);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;
		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		removedNode.prev = null;
		removedNode.next = null;
		this.length--;
		return removedNode;
	}
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
// list.push(99);
console.log(list.insert(1, 3), "pop node");

// list.remove(1);
console.log(list);
