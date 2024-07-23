import java.util.*;

public class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] time : times) {
            int u = time[0], v = time[1], t = time[2];
            graph.computeIfAbsent(u, x -> new ArrayList<>()).add(new int[]{v, t});
        }

        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        minHeap.add(new int[]{k, 0});
        Map<Integer, Integer> minTimes = new HashMap<>();

        while (!minHeap.isEmpty()) {
            int[] current = minHeap.poll();
            int node = current[0];
            int time = current[1];

            if (minTimes.containsKey(node)) continue;

            minTimes.put(node, time);
            if (graph.containsKey(node)) {
                for (int[] neighbor : graph.get(node)) {
                    int nei = neighbor[0];
                    int neiTime = neighbor[1];
                    if (!minTimes.containsKey(nei)) {
                        minHeap.add(new int[]{nei, time + neiTime});
                    }
                }
            }
        }

        if (minTimes.size() == n) {
            return Collections.max(minTimes.values());
        } else {
            return -1;
        }
    }
}
