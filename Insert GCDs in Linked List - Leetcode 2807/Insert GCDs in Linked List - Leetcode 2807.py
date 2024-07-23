class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = head
        cur = head.next
        
        while cur:
            gcd = math.gcd(cur.val, prev.val) # A
            g = ListNode(gcd)
            prev.next = g
            g.next = cur
            prev = cur
            cur = cur.next

        return head

# Time Complexity: O(n * A)
# Space Complexity: O(1)
