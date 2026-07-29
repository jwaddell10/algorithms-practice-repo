class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

function removeKthLastNode(head, k) {
	
}

console.log(removeKthLastNode(head, 2));
