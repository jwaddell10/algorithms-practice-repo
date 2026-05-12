class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.count = 0;
	}

	push(element) {
		const newNode = new Node(element);
		if (stack.count === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp;
			temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
        return this.count++
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// const newNode = new Node(10)

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack, "stack after push");
