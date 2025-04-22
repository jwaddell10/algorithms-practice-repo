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

	insert(value) {
		let newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;

		if (value === current.value) return undefined;

		while (true) {
			if (value > current.value) {
				if (!current.right) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			} else if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return this;
				} else {
					current = current.left;
				}
			}
		}
	}

	BFS() {
		let node = this.root;
		let data = [];
		let queue = [];
		queue.push(this.root);
		while (queue.length) {
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

const tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(10);
console.log(tree.DFS(), "found");

// console.log(tree);
