class Solution {
    private TreeNode prev = null;
    private int minDiff = Integer.MAX_VALUE;

    public int getMinimumDifference(TreeNode root) {
        inOrderTraversal(root);
        return minDiff;
    }

    private void inOrderTraversal(TreeNode node) {
        if (node == null) {
            return;
        }

        // Traverse the left subtree
        inOrderTraversal(node.left);

        // Process the current node
        if (prev != null) {
            minDiff = Math.min(minDiff, node.val - prev.val);
        }

        // Update the previous node to the current node
        prev = node;

        // Traverse the right subtree
        inOrderTraversal(node.right);
    }
}
