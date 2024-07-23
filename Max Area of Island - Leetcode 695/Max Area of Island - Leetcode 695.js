var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxArea = 0;

    const directions = [0, 1, 0, -1, 0]; // directions for moving right, down, left, up

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) {
            return 0;
        }
        grid[i][j] = 0; // mark as visited
        let area = 1;
        for (let d = 0; d < 4; d++) {
            const ni = i + directions[d];
            const nj = j + directions[d + 1];
            area += dfs(ni, nj);
        }
        return area;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
};
