public class Solution {
    private int numNodes = 0;

    public int averageOfSubtree(TreeNode root) {
        dfs(root);
        return numNodes;
    }

    private int[] dfs(TreeNode root) {
        if (root == null) return new int[] {0, 0}; // {node count, sum of values}

        int[] left = dfs(root.left);
        int[] right = dfs(root.right);

        int nodeCount = 1 + left[0] + right[0];
        int sum = root.val + left[1] + right[1];
        int avg = sum / nodeCount;

        if (root.val == avg) numNodes++;

        return new int[] {nodeCount, sum};
    }
}
