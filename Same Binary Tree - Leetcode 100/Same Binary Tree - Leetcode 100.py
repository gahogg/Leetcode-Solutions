# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # 1: Both Null
        if not p and not q: 
            return True
        
        # 2: One is Null
        if (p and not q) or (q and not p):
            return False
        
        # 3. Values Mismatch
        if p.val != q.val:
            return False
        
        return self.isSameTree(p.left, q.left) and \
               self.isSameTree(p.right, q.right)

# Time Complexity: O(n + m)
# Space Complexity: O(n + m)
# m is number of nodes in p, n is number of nodes in Q.
