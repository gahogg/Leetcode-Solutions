class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return None
        
        queue = deque()
        queue.append(root)
        queue.append(None)
        ans = []
        level = []
        
        while queue:
            node = queue.popleft()
            if node:
                level.append(node.val)
                if node.left: queue.append(node.left)                
                if node.right: queue.append(node.right)
            else:
                # Encountering None indicates that level is complete
                if level:
                    ans.append(level)
                level = []
                if len(queue) != 0:
                    queue.append(None)
        
        return ans

# Time Complexity: O(n)
# Space Complexity: O(n)
