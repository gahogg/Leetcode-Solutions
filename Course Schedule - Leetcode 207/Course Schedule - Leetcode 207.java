import java.util.*;

public class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] pair : prerequisites) {
            graph.computeIfAbsent(pair[0], k -> new ArrayList<>()).add(pair[1]);
        }

        final int UNVISITED = 0;
        final int VISITING = 1;
        final int VISITED = 2;
        int[] states = new int[numCourses];

        for (int i = 0; i < numCourses; i++) {
            if (!dfs(i, graph, states)) {
                return false;
            }
        }

        return true;
    }

    private boolean dfs(int node, Map<Integer, List<Integer>> graph, int[] states) {
        if (states[node] == 1) return false; // Cycle detected
        if (states[node] == 2) return true;  // Already visited

        states[node] = 1; // Mark as visiting

        if (graph.containsKey(node)) {
            for (int neighbor : graph.get(node)) {
                if (!dfs(neighbor, graph, states)) {
                    return false;
                }
            }
        }

        states[node] = 2; // Mark as visited
        return true;
    }
}
