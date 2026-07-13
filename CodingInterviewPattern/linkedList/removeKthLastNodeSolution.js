class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

// Build: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(
	1,
	new ListNode(2, new ListNode(3)),
);

function removeKthLastNode(head, k) {
	const dummy = new ListNode(-1);
	dummy.next = head;

	let leader = dummy;
	let trailer = dummy;

	// Move leader k steps ahead
	for (let i = 0; i < k; i++) {
		leader = leader.next;

		if (!leader) {
			return head; // k is greater than the length of the list
		}
	}

	// Move both pointers until leader reaches the last node
	while (leader.next) {
		leader = leader.next;
		trailer = trailer.next;
	}

	// Remove the kth last node
	trailer.next = trailer.next.next;
	return dummy.next;
}

console.log(removeKthLastNode(head, 2));
