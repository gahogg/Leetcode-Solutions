class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])
        t = m * n
        l = 0
        r = t - 1

        while l <= r:
            m = (l + r) // 2
            i = m // n
            j = m % n
            mid_num = matrix[i][j]

            if target == mid_num:
                return True
            elif target < mid_num:
                r = m - 1
            else:
                l = m + 1

        return False

# Time Complexity: O(log(m * n))
# Space Complexity: O(1)
