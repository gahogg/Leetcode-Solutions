import java.util.*;


class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> output = new ArrayList<>();
        if (root == null) return output;
        dfs(root, output);
        return output;
    }

    private void dfs(Node node, List<Integer> output) {
        output.add(node.val);
        for (Node child : node.children) {
            dfs(child, output);
        }
    }
}
