class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

function reverseLinkedList(head) {
	let curr = head;
	const stack = [];

	while (curr) {
		stack.push(curr);
		curr = curr.next;
	}


	const newHead = stack.pop();
	curr = newHead

	while (stack.length) {
		curr.next = stack.pop();
		curr = curr.next;
	}
	
	curr.next = null;
	return newHead;
}

console.log(reverseLinkedList(head));
