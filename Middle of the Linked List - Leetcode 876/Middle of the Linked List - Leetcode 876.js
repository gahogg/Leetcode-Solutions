var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};
