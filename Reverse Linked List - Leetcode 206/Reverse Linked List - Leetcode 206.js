function reverseList(head) {
    let prev = null;
    let cur = head;

    while (cur !== null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }

    return prev;
}
