class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        lca = [root]

        def search(root):
            if not root:
                return

            lca[0] = root
            if root is p or root is q:
                return
            elif root.val < p.val and root.val < q.val:
                search(root.right)
            elif root.val > p.val and root.val > q.val:
                search(root.left)
            else:
                return

        search(root)
        return lca[0]

# Time Complexity: O(h) { here "h" is the height of the binary search tree }
# Space Complexity: O(h) { here "h" is the height of the binary search tree }
