class Solution:
    def copyRandomList(self, head: "Optional [Node]") -> "Optional [Node]":
        if not head:
            return None

        curr = head
        old_to_new = {}

        while curr:
            node = Node(x=curr.val)
            old_to_new[curr] = node
            curr = curr.next

        curr = head

        while curr:
            new_node = old_to_new[curr]
            new_node.next = old_to_new[curr.next] if curr.next else None
            new_node.random = old_to_new[curr.random] if curr.random else None
            curr = curr.next

        return old_to_new[head]

# Time Complexity: O(n)
# Space Complexity: O(n)
