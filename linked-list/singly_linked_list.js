class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//push, pop, shift, unshift, get(index), set, insert, remove, reverse

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

	pop() {
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
		if (this.length === 0) return false;

		if (!this.head) return undefined;

		let newHead = this.head;
		this.head = newHead.next;
		this.length--;
		return newHead;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

    get(index) {
		if (index < 0 || index >= this.length) return null;

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
        if (index < 0 || index >= this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        //swap head with tail so it goes first
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        while(node !== null) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();

list.push("Hello");
list.push("goodbye");
list.push("welcome");
list.push("hi");
console.log(list.reverse(), "list reverse");
console.log(list, "list after reverse");

// list.unshift("unshift?")
// console.log(list.get(2));
// console.log(list, "list");
