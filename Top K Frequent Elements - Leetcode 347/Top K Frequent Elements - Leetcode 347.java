import java.util.*;

public class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : nums) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
        
        PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a.getValue(), b.getValue())
        );
        
        for (Map.Entry<Integer, Integer> entry : countMap.entrySet()) {
            if (heap.size() < k) {
                heap.offer(entry);
            } else {
                heap.offer(entry);
                heap.poll();
            }
        }
        
        int[] topK = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            topK[i] = heap.poll().getKey();
        }
        
        return topK;
    }
}














import java.util.*;

public class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        List<Integer>[] buckets = new ArrayList[nums.length + 1];
        for (int i = 0; i < buckets.length; i++) {
            buckets[i] = new ArrayList<>();
        }

        for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
            int num = entry.getKey();
            int freq = entry.getValue();
            buckets[freq].add(num);
        }

        List<Integer> result = new ArrayList<>();
        for (int i = buckets.length - 1; i >= 0; --i) {
            if (!buckets[i].isEmpty()) {
                result.addAll(buckets[i]);
                if (result.size() >= k) {
                    break;
                }
            }
        }

        // Convert result to int[]
        int[] resultArray = new int[k];
        for (int i = 0; i < k; i++) {
            resultArray[i] = result.get(i);
        }
        return resultArray;
    }
}
