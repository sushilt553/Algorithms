// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newStackNode) {
        
    }

    pop() {

    }

    size() {
        return this.length;
    }

}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode; 
        }
        this.inStack.push(new Node(newNode.value))
        return this.size();
    }

    dequeue(val) {

    }

    size(){
        return this.inStack.size() + this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
