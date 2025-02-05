"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        if not root:
            return []

        output = []
        def dfs(node):
            output.append(node.val)
            for child in node.children:
                dfs(child)
        
        dfs(root)
        return output

        # Time: O(n)
        # Space: O(n)
        # n is number of nodes in the tree