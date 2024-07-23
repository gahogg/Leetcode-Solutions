public class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return hasSum(root, 0, targetSum);
    }

    private boolean hasSum(TreeNode node, int currentSum, int targetSum) {
        if (node == null) return false;

        currentSum += node.val;

        if (node.left == null && node.right == null) {
            return currentSum == targetSum;
        }

        return hasSum(node.left, currentSum, targetSum) || hasSum(node.right, currentSum, targetSum);
    }
}
