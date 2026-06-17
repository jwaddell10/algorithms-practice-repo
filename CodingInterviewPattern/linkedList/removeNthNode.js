class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const head = new Node(3, new Node(2, new Node(1, new Node(0))))

function removeNthNode(k, head) {
    let length = 0;
    let curr = head;
    while (curr) {
        length += 1;
        curr = curr.next;
    }

    curr = head;
    
    let nodeToRemove = length - k;
    if (nodeToRemove === 0) {
        curr = curr.next;
        return head.val
    }
    let prev = curr;
    for (let i = 0; i <= nodeToRemove; i++) {
        if (i === nodeToRemove) {
            prev.next = curr.next;
            return curr.val;
        }
        prev = curr;
        curr = curr.next;
    }
}

console.log(removeNthNode(4, head))