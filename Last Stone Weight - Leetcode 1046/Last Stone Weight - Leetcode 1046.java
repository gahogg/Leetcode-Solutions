import java.util.PriorityQueue;

public class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        for (int stone : stones) {
            maxHeap.offer(stone);
        }

        while (maxHeap.size() > 1) {
            int largest = maxHeap.poll();
            int nextLargest = maxHeap.poll();

            if (largest != nextLargest) {
                maxHeap.offer(largest - nextLargest);
            }
        }

        return maxHeap.isEmpty() ? 0 : maxHeap.peek();
    }
}
