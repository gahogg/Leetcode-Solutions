# Heap Solution:
from collections import Counter
import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        heap = []

        for key, val in counter.items():
            if len(heap) < k:
                heapq.heappush(heap, (val, key))
            else:
                heapq.heappushpop(heap, (val, key))
        
        return [h[1] for h in heap]
    # Time: O(n log k), Space: O(k)


import heapq
from collections import Counter

def top_k_frequent(nums, k):
    # Step 1: Count frequency
    freq_map = Counter(nums)

    # Step 2: Use max heap (invert frequency to simulate max heap)
    max_heap = [(-freq, num) for num, freq in freq_map.items()]
    heapq.heapify(max_heap)  # Convert list into a heap in O(n)

    # Step 3: Extract k most frequent elements
    result = [heapq.heappop(max_heap)[1] for _ in range(k)]
    return result
    # Max Heap

# Buckets
from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        counter = Counter(nums)
        buckets = [0] * (n + 1)

        for num, freq in counter.items():
            if buckets[freq] == 0:
                buckets[freq] = [num]
            else:
                buckets[freq].append(num)
        
        ret = []
        for i in range(n, -1, -1):
            if buckets[i] != 0:
                ret.extend(buckets[i])
            if len(ret) == k:
                break
        
        return ret

# Time Complexity: O(n)
# Space Complexity: O(n)
