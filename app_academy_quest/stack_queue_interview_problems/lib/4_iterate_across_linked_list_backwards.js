// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);

        if (!this.top) {
            this.top = node;
            this.bottom = node;
            this.length++;
            return this.length;
        }else{
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
            this.length++;
            return this.length;
        }
    }

    pop() {
        if (!this.top) return null;

        if (this.length === 1) {
            let temp = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return temp;
        }else{
            let temp = this.top;
            this.top = this.top.next;
            this.length--;
            return temp;
        }
    }

    size() {
        return this.length;
    }
}

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    let stack = new Stack();

    let currHead = linkedList.head;

    while (currHead) {
        stack.push(currHead.value);
        currHead = currHead.next;
    }

    let str = "";

    while (stack.size() > 0) {
        if (stack.size() > 1) {
            str += stack.pop().value + " -> ";
        }else{
            str += stack.pop().value;
        }
    }
    return str;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
