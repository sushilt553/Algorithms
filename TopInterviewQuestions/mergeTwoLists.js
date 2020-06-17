var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let currHead = dummy;

    while (l1 || l2) {
        let l1Val = l1 ? l1.val : Infinity;
        let l2Val = l2 ? l2.val : Infinity;

        if (l1Val < l2Val) {
            currHead.next = new ListNode(l1Val);
            if (l1) l1 = l1.next;
        }else{
            currHead.next = new ListNode(l2Val);
            if (l2) l2 = l2.next;
        }
        currHead = currHead.next;
    }
    return dummy.next;
}