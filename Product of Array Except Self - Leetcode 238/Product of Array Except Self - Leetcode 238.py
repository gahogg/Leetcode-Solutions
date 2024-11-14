# Brute Force Solution
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0] * n

        for i in range(n):
            prod = 1
            for j in range(n):
                if i != j:
                    prod *= nums[j]
            ans[i] = prod
        
        return ans
        # Time: O(n^2)
        # Space: O(n)


# Optimal Solution
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        l_mult = 1
        r_mult = 1
        n = len(nums)
        l_arr = [0] * n
        r_arr = [0] * n
        
        for i in range(n): 
            j = -i -1
            l_arr[i] = l_mult
            r_arr[j] = r_mult
            l_mult *= nums[i]
            r_mult *= nums[j]

        return [l*r for l, r in zip(l_arr, r_arr)]

# Time Complexity: O(n)
# Space Complexity: O(n)


# Optimal Solution for Bootcamp
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [0] * n

        L = 1
        left_product = [0] * n

        for i in range(n):
            left_product[i] = L
            L *= nums[i]


        R = 1
        right_product = [0] * n

        for i in range(n-1, -1, -1):
            right_product[i] = R
            R *= nums[i]
        

        for i in range(n):
            answer[i] = left_product[i] * right_product[i]
        
        return answer   
# Time Complexity: O(n)
# Space Complexity: O(n)
