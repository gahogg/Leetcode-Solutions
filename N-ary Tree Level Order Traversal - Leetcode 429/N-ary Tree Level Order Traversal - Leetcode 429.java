import java.util.*;


class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> output = new ArrayList<>();
        if (root == null) return output;

        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            int n = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                Node node = q.poll();
                level.add(node.val);
                if (node.children != null) {
                    q.addAll(node.children);
                }
            }
            output.add(level);
        }
        return output;
    }
}
