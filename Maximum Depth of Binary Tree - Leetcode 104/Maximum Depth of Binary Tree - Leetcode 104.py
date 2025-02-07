# DFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)

        return 1 + max(left, right)

# Time Complexity: O(n)
# Space Complexity: O(h) { here "h" is the height of the binary tree }

# BFS
class Solution:
    def maxDepth(self, root):
        if not root:
            return 0  # Height of an empty tree is 0
        
        queue = deque([root])
        height = 0

        while queue:
            level_size = len(queue)  # Number of nodes at the current level
            
            for _ in range(level_size):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            height += 1  # Increment height at each level
        
        return height
    # Time Complexity: O(n)
    # Space Complexity: O(n)
