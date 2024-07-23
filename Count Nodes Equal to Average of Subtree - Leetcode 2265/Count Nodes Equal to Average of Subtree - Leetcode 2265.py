class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:
        num_nodes = [0]

        def dfs(root):
            if not root:
                return (0, 0)
            
            N_left, summ_left = dfs(root.left)
            N_right, summ_right = dfs(root.right)

            N = 1 + N_left + N_right
            summ = root.val + summ_left + summ_right
            avg = summ // N

            if root.val == avg:
                num_nodes[0] += 1

            return (N, summ)
        
        dfs(root)
        return num_nodes[0]
        # Time: O(N)
        # Space: O(N)
        
    
