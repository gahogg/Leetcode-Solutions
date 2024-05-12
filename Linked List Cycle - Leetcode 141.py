class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        dummy = ListNode()
        dummy.next = head
        slow = fast = dummy

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

            if slow is fast:
                return True

        return False

# Time Complexity: O(n)
# Space Complexity: O(1)
