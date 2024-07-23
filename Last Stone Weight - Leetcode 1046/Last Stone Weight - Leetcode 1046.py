class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        for i in range(len(stones)):
            stones[i] *= -1 # Negate to force Max Heap

        heapq.heapify(stones)

        while len(stones) > 1:
            largest = heapq.heappop(stones)
            next_largest = heapq.heappop(stones)

            if largest != next_largest:
                heapq.heappush(stones, largest - next_largest)

        return -heapq.heappop(stones) if stones else 0
        # Time: O(n log n)
        # Space: O(1)
        
