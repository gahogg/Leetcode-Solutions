class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        counts = [0, 0, 0]

        for color in nums:
            counts[color] += 1
        
        R, W, B = counts
        
        nums[:R]    = [0] * R
        nums[R:R+W] = [1] * W 
        nums[R+W:]  = [2] * B  