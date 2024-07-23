function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let numIslands = 0;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') return;
        grid[i][j] = '0';
        dfs(i, j + 1);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i - 1, j);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                dfs(i, j);
            }
        }
    }

    return numIslands;
}
