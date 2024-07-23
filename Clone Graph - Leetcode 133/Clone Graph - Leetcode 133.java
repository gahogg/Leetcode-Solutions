import java.util.*;

public class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) return null;

        Map<Node, Node> oToN = new HashMap<>();
        Stack<Node> stk = new Stack<>();
        Set<Node> visited = new HashSet<>();

        stk.push(node);
        visited.add(node);

        // DFS to create the nodes
        while (!stk.isEmpty()) {
            Node curr = stk.pop();
            oToN.put(curr, new Node(curr.val));

            for (Node nei : curr.neighbors) {
                if (!visited.contains(nei)) {
                    visited.add(nei);
                    stk.push(nei);
                }
            }
        }

        // DFS to set up neighbors
        for (Map.Entry<Node, Node> entry : oToN.entrySet()) {
            Node oldNode = entry.getKey();
            Node newNode = entry.getValue();
            for (Node nei : oldNode.neighbors) {
                newNode.neighbors.add(oToN.get(nei));
            }
        }

        return oToN.get(node);
    }
}


