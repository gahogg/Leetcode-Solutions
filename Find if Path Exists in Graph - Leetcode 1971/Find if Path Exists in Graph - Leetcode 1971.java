// Recurisve DFS

import java.util.*;

public class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        if (source == destination) return true;

        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] edge : edges) {
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(edge[0]);
        }

        Set<Integer> seen = new HashSet<>();
        seen.add(source);

        return dfs(source, destination, graph, seen);
    }

    private boolean dfs(int node, int destination, Map<Integer, List<Integer>> graph, Set<Integer> seen) {
        if (node == destination) return true;

        for (int neighbor : graph.getOrDefault(node, Collections.emptyList())) {
            if (!seen.contains(neighbor)) {
                seen.add(neighbor);
                if (dfs(neighbor, destination, graph, seen)) return true;
            }
        }
        return false;
    }
}


// Iterative DFS With Stack
import java.util.*;

public class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        if (source == destination) return true;

        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] edge : edges) {
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(edge[0]);
        }

        Set<Integer> seen = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        stack.push(source);
        seen.add(source);

        while (!stack.isEmpty()) {
            int node = stack.pop();
            if (node == destination) return true;
            for (int neighbor : graph.getOrDefault(node, Collections.emptyList())) {
                if (!seen.contains(neighbor)) {
                    seen.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return false;
    }
}

// BFS With Queue
import java.util.*;

public class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        if (source == destination) return true;

        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int[] edge : edges) {
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(edge[0]);
        }

        Set<Integer> seen = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(source);
        seen.add(source);

        while (!queue.isEmpty()) {
            int node = queue.poll();
            if (node == destination) return true;
            for (int neighbor : graph.getOrDefault(node, Collections.emptyList())) {
                if (!seen.contains(neighbor)) {
                    seen.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
        return false;
    }
}
