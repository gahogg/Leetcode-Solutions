# YouTube Solution
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

        if not root:
            return None

        root.left, root.right = root.right, root.left

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root

# Time Complexity: O(n)
# Space Complexity: O(h) { here "h" is the height of the tree }


# Solution for Bootcamp
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def invert(node):
            if not node:
                return
                
            node.left, node.right = node.right, node.left
            invert(node.left)
            invert(node.right)

        invert(root)
        return root

# Time Complexity: O(n)
# Space Complexity: O(h) { here "h" is the height of the tree }
