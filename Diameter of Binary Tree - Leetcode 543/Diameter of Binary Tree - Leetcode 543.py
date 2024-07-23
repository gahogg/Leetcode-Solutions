class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        largest_diameter = [0]

        def height(root):
            if root is None:
                return 0

            left_height = height(root.left)
            right_height = height(root.right)
            diameter = left_height + right_height

            largest_diameter[0] = max(largest_diameter[0], diameter)
            
            return 1 + max(left_height, right_height)

        height(root)
        return largest_diameter[0]

# Time Complexity: O(n)
# Space Complexity: O(h) { here "h" is the height of the tree }
