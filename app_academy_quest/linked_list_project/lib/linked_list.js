// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;
        let temp;

        if (this.length === 1) {
            temp = this.tail;
            this.head = null;
            this.tail = null;
        }else{
            let currNode = this.head;

            while (currNode.next.next) {
                currNode = currNode.next;
            }

            temp = currNode.next;
            currNode.next = null;
            this.tail = currNode;
        }
        this.length--;
        return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
          
        }else{
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;

        let temp;
        if (this.length === 1) {
            temp = this.head;
            this.head = null;
            this.tail = null;
            
        }else{
            temp = this.head;
            this.head = this.head.next; 
        }

        this.length--;
        return temp;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let head = this.head;

        while (head) {
            if (head.value === target) return true;
            head = head.next;
        }
        return false;
    }   

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length) return null;

        let currHead = this.head;

        for (let i = 0; i < index; i++) {
            currHead = currHead.next;
        }
        return currHead;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length) return false;

        let currHead = this.head;

        for (let i = 0; i < index; i++) {
            currHead = currHead.next;
        }
        currHead.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false;
        let node = new Node(val);

        let prevNode = this.get(index - 1);
        let next = prevNode.next
        prevNode.next = node;
        node.next = next;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined;
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return temp;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
