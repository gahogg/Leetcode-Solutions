import java.util.*;

public class Solution {
    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        int totalCost = 0;
        boolean[] visited = new boolean[n];
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        minHeap.offer(new int[]{0, 0}); // cost, pointIndex
        
        while (!minHeap.isEmpty()) {
            int[] edge = minHeap.poll();
            int cost = edge[0];
            int point = edge[1];
            
            if (visited[point]) continue;
            
            visited[point] = true;
            totalCost += cost;
            
            for (int i = 0; i < n; i++) {
                if (!visited[i]) {
                    int newCost = Math.abs(points[point][0] - points[i][0]) + Math.abs(points[point][1] - points[i][1]);
                    minHeap.offer(new int[]{newCost, i});
                }
            }
        }
        
        return totalCost;
    }
}
