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
		if (!this.head) return this.push(val);
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return !!this.unshift(val);

		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return this;
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
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        while (node !== null) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("goodbye");
list.push("welcome");
list.push("hi");
console.log(list.reverse());
// console.log(list.insert(3, 'insert'), 'list get')

// console.log(list.reverse(), "list reverse");
console.log(list);

// list.unshift("unshift?")
// console.log(list.get(2));
// console.log(list, "list");
