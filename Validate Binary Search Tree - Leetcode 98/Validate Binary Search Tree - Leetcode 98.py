class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def is_valid(node, minn, maxx):
            if not node:
                return True
            
            if node.val <= minn or node.val >= maxx:
                return False
            
            return is_valid(node.left, minn, node.val) and is_valid(node.right, node.val, maxx)

        return is_valid(root, float("-inf"), float("inf"))

# Time Complexity: O(n)
# Space Complexity: O(h) { here "h" is height of tree }
