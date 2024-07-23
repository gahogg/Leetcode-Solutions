import java.util.*;

public class Solution {
    public int orangesRotting(int[][] grid) {
        final int EMPTY = 0, FRESH = 1, ROTTEN = 2;
        int m = grid.length, n = grid[0].length;
        int numFresh = 0;
        Queue<int[]> q = new LinkedList<>();

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == ROTTEN) {
                    q.offer(new int[]{i, j});
                } else if (grid[i][j] == FRESH) {
                    numFresh++;
                }
            }
        }

        if (numFresh == 0) return 0;

        int numMinutes = -1;
        while (!q.isEmpty()) {
            int qSize = q.size();
            numMinutes++;
            
            for (int k = 0; k < qSize; k++) {
                int[] pos = q.poll();
                int i = pos[0], j = pos[1];
                for (int[] dir : new int[][]{{0,1},{1,0},{0,-1},{-1,0}}) {
                    int r = i + dir[0], c = j + dir[1];
                    if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == FRESH) {
                        grid[r][c] = ROTTEN;
                        numFresh--;
                        q.offer(new int[]{r, c});
                    }
                }
            }
        }

        return numFresh == 0 ? numMinutes : -1;
    }
}
