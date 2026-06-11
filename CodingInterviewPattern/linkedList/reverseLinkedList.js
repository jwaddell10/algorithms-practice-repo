class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const head = new Node(3, new Node(2, new Node(1)));

function reverseLinkedList(head) {
	let curr = head;
	const stack = [];

	while (curr) {
		stack.push(curr)
		curr = curr.next;
	}

	let newHead = stack.pop();
	curr = newHead;

	while(stack.length) {
		curr.next = stack.pop();
		curr = curr.next
	}

	curr.next = null;
	return newHead;
}
console.log(reverseLinkedList(head));
