class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        good_nodes = 0
        stk = [(root, float("-inf"))]

        while stk:
            node, largest = stk.pop()
            
            if largest <= node.val:
                good_nodes += 1

            largest = max(largest, node.val)
            if node.right: stk.append((node.right, largest))
            if node.left: stk.append((node.left, largest))

        return good_nodes

# Time Complexity: O(n)
# Space Complexity: O(n)
