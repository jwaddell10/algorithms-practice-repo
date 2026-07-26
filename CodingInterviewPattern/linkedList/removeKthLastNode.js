class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

function removeKthLastNode(head, k) {
	let dummy = new ListNode(-1);
	dummy.next = head;

	let leader = dummy;
	let trailer = dummy;

	for (let i = 0; i < k; i++) {
		leader = leader.next;
	}
	
	while (leader.next) {
		leader = leader.next;
		trailer = trailer.next
	}
	
	trailer.next = trailer.next.next;
	return dummy.next
}

console.log(removeKthLastNode(head, 2));
