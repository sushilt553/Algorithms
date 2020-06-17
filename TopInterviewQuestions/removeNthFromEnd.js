class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = listLength(head);
    let currHead = dummy;
    length -= n;

    while (length > 0) {
        currHead = currHead.next;
        length--;
    }
    currHead.next = currHead.next.next;
    return dummy.next;
}

var listLength = function(head) {
    let length = 0;

    while (head) {
        length++;
        head = head.next;
    }
    return length
}

let head = new Node(4);
let nextNode = new Node(5);
let nextnextNode = new Node(6);

head.next = nextNode;
nextNode.next = nextnextNode;
console.log(removeNthFromEnd(head, 1));