from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        EMPTY, FRESH, ROTTEN = 0, 1, 2
        m, n = len(grid), len(grid[0])
        num_fresh = 0
        q = deque()

        for i in range(m):
            for j in range(n):
                if grid[i][j] == ROTTEN:
                    q.append((i, j))
                elif grid[i][j] == FRESH:
                    num_fresh += 1

        if num_fresh == 0:
            return 0

        num_minutes = -1
        while q:
            q_size = len(q)
            num_minutes += 1
        
            for _ in range(q_size):
                i, j = q.popleft()
                for r, c in [(i, j + 1), (i + 1, j), (i, j - 1), (i - 1, j)]:
                    if 0 <= r < m and 0 <= c < n and grid[r][c] == FRESH:
                        grid[r][c] = ROTTEN
                        num_fresh -= 1
                        q.append((r, c))

        if num_fresh == 0:
            return num_minutes
        else:
            return -1

# Time Complexity: O(m*n)
# Space Complexity: O(m*n)
