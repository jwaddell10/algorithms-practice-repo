class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let current = this.root;

		while (true) {
			if (val === current.value) return undefined;

			if (val < current.value) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (val > current.value) {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(val) {
		if (this.root === null) return false;

		let current = this.root;
		let found = false;

		if (val === this.root.value) return current;

		while (current && !found) {
			if (val < current.value) {
				current = current.left;
			} else if (val > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}

	BFS() {
		let node = this.root;
		data = [];
		queue = [];
		queue.push(this.root);
		while(queue.length) {
			node = queue.shift();
			data.push(node);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	DFSPreOrder() {
		let visitedNodes = [];
		let current = this.root;

		function traverse(node) {
			visitedNodes.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(current);
		return visitedNodes;
	}

	DFSPostOrder() {
		let visitedNodes = [];
		let current = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visitedNodes.push(node.value);
		}

		traverse(current);
		return visitedNodes;
	}
}