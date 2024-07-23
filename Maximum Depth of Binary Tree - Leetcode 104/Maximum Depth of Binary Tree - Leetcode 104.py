class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)

        return 1 + max(left, right)

# Time Complexity: O(n)
# Space Complexity: O(h) { here "h" is the height of the binary tree }
