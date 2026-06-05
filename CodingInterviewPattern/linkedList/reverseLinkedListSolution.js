class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

function reverseLinkedList(head) {
	let curr = head;
	let prev = null;

	while (curr) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}

console.log(reverseLinkedList(head))
