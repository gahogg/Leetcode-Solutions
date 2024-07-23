class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        prev = None
        
        while cur:
            temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        
        return prev

# Time Complexity: O(n)
# Space Complexity: O(1)
