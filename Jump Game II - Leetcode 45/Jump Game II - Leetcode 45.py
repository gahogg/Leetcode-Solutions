# Brute Force
class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        smallest = [float('inf')]

        def backtrack(i=0, jumps=0):
            if i == n-1:
                smallest[0] = min(smallest[0], jumps)
                return
            
            max_jump = nums[i]
            max_reachable_index = min(i+max_jump, n-1)

            for new_index in range(max_reachable_index, i, -1):
                backtrack(new_index, jumps+1)
        
        backtrack()
        return smallest[0]
    
    
# Optimal    
class Solution:
    def jump(self, nums: List[int]) -> int:
        smallest = 0
        n = len(nums)
        end, far = 0, 0

        for i in range(n-1):
            far = max(far, i+nums[i])
            
            if i == end:
                smallest += 1
                end = far
        
        return smallest
        # Time: O(n)
        # Space: O(1)
        