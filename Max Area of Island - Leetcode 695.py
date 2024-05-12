class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        def dfs(i, j):
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] != 1:
                return 0
            else:
                grid[i][j] = 0
                return 1 + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i - 1, j) + dfs(i, j + 1)

        max_area = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    max_area = max(max_area, dfs(i, j))

        return max_area

# Time Complexity: O(m*n)
# Space Complexity: O(m*n)
