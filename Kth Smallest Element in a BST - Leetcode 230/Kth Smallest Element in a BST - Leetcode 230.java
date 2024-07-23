import java.util.*;

public class Solution {
    private int count;
    private int ans;

    public int kthSmallest(TreeNode root, int k) {
        count = k;
        ans = 0;
        dfs(root);
        return ans;
    }

    private void dfs(TreeNode node) {
        if (node == null) {
            return;
        }

        dfs(node.left);

        if (count == 1) {
            ans = node.val;
        }

        count--;
        if (count > 0) {
            dfs(node.right);
        }
    }
}
