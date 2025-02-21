# Code for Bootcamp
class Solution:
    from collections import deque
    
    def orangesRotting(self, grid):
        # Initialize variables
        Minute = 0
        Q = deque()
        FreshCount = 0
        M, N = len(grid), len(grid[0])
        
        # Populate queue with initial rotten oranges and count fresh oranges
        for i in range(M):
            for j in range(N):
                if grid[i][j] == 2:
                    Q.append((i, j))
                elif grid[i][j] == 1:
                    FreshCount += 1

        # Perform BFS
        while Q and FreshCount > 0:
            NumRotting = len(Q)
            for _ in range(NumRotting):
                i, j = Q.popleft()
                for r, c in [(i, j + 1), (i + 1, j), (i, j - 1), (i - 1, j)]:
                    if 0 <= r < M and 0 <= c < N and grid[r][c] == 1:
                        grid[r][c] = 2
                        FreshCount -= 1
                        Q.append((r, c))
            Minute += 1  # Increment minute after processing all rotten oranges in this round
        
        # Return the time taken or -1 if fresh oranges remain
        return Minute if FreshCount == 0 else -1



# Code for YouTube Video
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
