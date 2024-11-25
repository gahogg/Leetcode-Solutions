# Brute Force Solution
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:

        def remove_largest():
            index_of_largest = stones.index(max(stones))
            return stones.pop(index_of_largest)

        while len(stones) > 1:
            stone_1 = remove_largest()
            stone_2 = remove_largest()
            if stone_1 != stone_2:
                stones.append(stone_1 - stone_2)

        return stones[0] if stones else 0
# Time: O(n^2)
# Space: O(1)

# Optimal Solution
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
        
