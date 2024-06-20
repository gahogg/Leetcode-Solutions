class Solution:
    def majorityElement(self, nums):
        counter = {}
        for num in nums:
            if num in counter:
                counter[num] += 1
            else:
                counter[num] = 1
        
        max_count = -1
        ans = -1
        for key, val in counter.items():
            if val > max_count:
                max_count = val
                ans = key
        
        return ans
        # Time: O(n)
        # Space: O(n)
        

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        count = 0

        for num in nums:
            if count == 0:
                candidate = num
            
            count += 1 if candidate == num else -1
        
        return candidate
        # Time: O(n)
        # Space: O(1)
