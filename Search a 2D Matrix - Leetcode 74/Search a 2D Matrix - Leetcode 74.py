# Brute Force Solution
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in matrix:
            if target in row:
                return True
        
        return False
# Time: O(m * n)
# Space: O(1)

# Optimal Solution
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])
        t = m * n
        l = 0
        r = t - 1

        while l <= r:
            mid = (l + r) // 2
            mid_i = mid // n
            mid_j = mid % n
            mid_num = matrix[mid_i][mid_j]

            if target == mid_num:
                return True
            elif target < mid_num:
                r = mid - 1
            else:
                l = mid + 1

        return False

# Time Complexity: O(log(m * n))
# Space Complexity: O(1)
