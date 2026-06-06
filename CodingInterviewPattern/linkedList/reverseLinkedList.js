class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}
const head = new Node(3, new Node(2, new Node(1)));

function reverseLinkedList(head) {
	let curr = head;
	let prev = null;

	while (curr !== null) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}

console.log(reverseLinkedList(head));
