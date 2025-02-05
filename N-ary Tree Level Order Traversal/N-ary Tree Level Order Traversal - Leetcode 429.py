"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if not root:
            return []
        output = []
        q = deque()
        q.append(root)

        while q:
            n = len(q)
            level = []
            for _ in range(n):
                node = q.popleft()
                level.append(node.val)
                for child in node.children:
                    q.append(child)
            output.append(level)
        
        return output

        # Time: O(n)
        # Space: O(n)
        # n is number of nodes in the tree