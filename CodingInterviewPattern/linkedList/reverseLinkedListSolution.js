function reverseLinkedList(head) {
    let curr = head;
	const stack =[];

	while (curr) {
		stack.push(curr)
		curr = curr.next;
	}

	let newHead = stack.pop();
	curr = newHead;

	while (stack.length) {
		curr.next = stack.pop();
		curr = curr.next;
	}

	curr.next = null;

	return newHead
}

console.log(reverseLinkedList(head));
