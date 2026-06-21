class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const head = new Node(4, new Node(3, new Node(2, new Node(1))));

function removeNthNode(k, head) {
	let curr = head;
	let length = 0;
	while (curr) {
		curr = curr.next;
		length++;
	}

	if (k === length) {
		return head.next;
	}
	let nodeToRemove = length - k - 1;
	curr = head;
	let temp = 0;
	let prev = curr;
	while (temp <= nodeToRemove) {
		prev = curr;
		curr = curr.next;
		temp++;
	}
	prev.next = curr.next;
	return head;
	//loop until i get to the nodeToremove, save prev so i can point it next next
	//also keep a curr?
}

console.log(removeNthNode(4, head));
