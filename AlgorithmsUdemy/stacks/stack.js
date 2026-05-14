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

    pop() {
        if (stack.count === 0) return null;
        let temp = this.first;
        
        if (stack.count === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.count--;
        console.log(temp.value, 'temp from pop')
        return temp.value;
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

stack.push(23);
stack.push(230);
stack.push(2301);
stack.pop()
stack.pop()
stack.pop()
