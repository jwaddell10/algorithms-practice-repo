class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(value) {
        let newNode = new Node(value)
        let current;
        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
            this.length++;
        }
        // if (this.head) {
        //     current = this.head
        //     console.log(current, 'current')
        //     while (current.next) {
        //         current.next = newNode;
        //     }
            // while (current.next) {
            //     current.next = current;
            // }
        
    }
}

let linkedList = new LinkedList();
linkedList.insert(10)
linkedList.insert(11)
linkedList.insert(12)

console.log(linkedList, 'linkelist')