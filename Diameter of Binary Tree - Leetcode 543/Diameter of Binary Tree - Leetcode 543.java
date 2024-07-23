/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */

 public class Solution {
    private int largestDiameter = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        height(root);
        return largestDiameter;
    }

    private int height(TreeNode node) {
        if (node == null) return 0;
        
        int leftHeight = height(node.left);
        int rightHeight = height(node.right);
        int diameter = leftHeight + rightHeight;
        
        largestDiameter = Math.max(largestDiameter, diameter);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }
}

// Time Complexity: O(n)
// Space Complexity: O(h) // "h" is the height of the tree
