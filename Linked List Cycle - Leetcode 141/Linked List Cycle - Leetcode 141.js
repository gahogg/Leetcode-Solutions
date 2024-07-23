var hasCycle = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy, fast = dummy;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};
