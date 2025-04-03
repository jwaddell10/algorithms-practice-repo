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
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	pop() {
		//tail needs to be null
		//new tail needs to be created

		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return false;

		let removed = this.head;
		this.head = removed.next;
		this.length--;

		return removed;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;

		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		let prev = this.get(index - 1);
		let temp = prev.next;
		let newNode = new Node(val);
		
		prev.next = newNode;
		newNode.next = temp;

		this.length++;

		return true;
	}

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
		let currentNode = this.head;
		this.head = this.tail;
		this.tail = currentNode;

		let next = null;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = currentNode.next;
			currentNode.next = prev;
			prev = currentNode;
			currentNode = next;
		}

		return this;
	}
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.reverse());
// console.log(list.insert(3, 'insert'), 'list get')

// console.log(list.reverse(), "list reverse");
console.log(list);

// list.unshift("unshift?")
// console.log(list.get(2));
// console.log(list, "list");
