# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        k_ans = [k]
        ans = [0]

        def dfs(node):
            if not node:
                return
            
            dfs(node.left)
            k_ans[0] = k_ans[0] - 1

            if k_ans[0] == 0:
                ans[0] = node.val

            if k > 0:
                dfs(node.right)
            
        dfs(root)
        return ans[0]
        # Time: O(n)
        # Space: O(n)
