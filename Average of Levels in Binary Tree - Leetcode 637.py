# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        avgs = []
        q = deque()
        q.append(root)

        while q:
            avg = 0
            n = len(q)
            for _ in range(n):
                node = q.popleft()
                avg += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            avg /= n
            avgs.append(avg)
        
        return avgs
        # Time: O(n)
        # Space: O(n)
