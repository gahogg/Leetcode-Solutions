import java.util.*;

public class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> result = new ArrayList<>();
        if (heights == null || heights.length == 0 || heights[0].length == 0) return result;

        int m = heights.length;
        int n = heights[0].length;
        
        boolean[][] pacific = new boolean[m][n];
        boolean[][] atlantic = new boolean[m][n];
        
        Queue<int[]> pacQueue = new LinkedList<>();
        Queue<int[]> atlQueue = new LinkedList<>();
        
        // Add pacific border cells
        for (int i = 0; i < m; i++) {
            pacQueue.add(new int[]{i, 0});
            pacific[i][0] = true;
        }
        for (int j = 0; j < n; j++) {
            pacQueue.add(new int[]{0, j});
            pacific[0][j] = true;
        }
        
        // Add atlantic border cells
        for (int i = 0; i < m; i++) {
            atlQueue.add(new int[]{i, n - 1});
            atlantic[i][n - 1] = true;
        }
        for (int j = 0; j < n; j++) {
            atlQueue.add(new int[]{m - 1, j});
            atlantic[m - 1][j] = true;
        }

        bfs(pacQueue, pacific, heights);
        bfs(atlQueue, atlantic, heights);
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.add(Arrays.asList(i, j));
                }
            }
        }
        
        return result;
    }

    private void bfs(Queue<int[]> queue, boolean[][] ocean, int[][] heights) {
        int m = heights.length;
        int n = heights[0].length;
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        while (!queue.isEmpty()) {
            int[] cell = queue.poll();
            int r = cell[0];
            int c = cell[1];
            
            for (int[] dir : directions) {
                int newRow = r + dir[0];
                int newCol = c + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n 
                    && !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[r][c]) {
                    ocean[newRow][newCol] = true;
                    queue.add(new int[]{newRow, newCol});
                }
            }
        }
    }
}
