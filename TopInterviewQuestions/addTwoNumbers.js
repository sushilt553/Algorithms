var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);

    let currentHead = dummyHead;
    let carry = 0;

    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;

        let sum = 0;
        sum = carry + x + y;
        carry = Math.floor(sum / 10);
        currentHead.next = new ListNode(sum % 10);
        currentHead = currentHead.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        currentHead.next = new ListNode(carry);
    }

    return dummyHead.next;
}