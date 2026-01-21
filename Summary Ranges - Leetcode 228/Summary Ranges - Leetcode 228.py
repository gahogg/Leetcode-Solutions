class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ans = []     
        i = 0 
        n = len(nums)
        while i < n: 
            start = nums[i]  
            while i < n - 1 and nums[i] + 1 == nums[i + 1]: 
                i += 1 
            
            ans.append(f"{start}->{nums[i]}" if start != nums[i] else f"{nums[i]}")
            
            i += 1

        return ans
        # Time: O(n)
        # Space: O(n)
