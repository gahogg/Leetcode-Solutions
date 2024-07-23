import java.util.Stack;

public class Solution {
    public int goodNodes(TreeNode root) {
        if (root == null) return 0;

        int goodNodes = 0;
        Stack<Pair<TreeNode, Integer>> stk = new Stack<>();
        stk.push(new Pair<>(root, Integer.MIN_VALUE));

        while (!stk.isEmpty()) {
            Pair<TreeNode, Integer> pair = stk.pop();
            TreeNode node = pair.getKey();
            int largest = pair.getValue();

            if (largest <= node.val) {
                goodNodes++;
            }

            largest = Math.max(largest, node.val);
            if (node.right != null) stk.push(new Pair<>(node.right, largest));
            if (node.left != null) stk.push(new Pair<>(node.left, largest));
        }

        return goodNodes;
    }
}
