class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        behind = ahead = dummy

        for _ in range(n + 1):
            ahead = ahead.next
        while ahead:
            behind = behind.next
            ahead = ahead.next

        behind.next = behind.next.next

        return dummy.next
