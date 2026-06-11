class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const head = new Node(3, new Node(2, new Node(1, new Node(0))))

function removeNthNode(k, head) {
    
}

console.log(removeNthNode(3, head))