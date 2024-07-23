function pacificAtlantic(heights) {
    const result = [];
    if (!heights || heights.length === 0 || heights[0].length === 0) return result;

    const m = heights.length;
    const n = heights[0].length;

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const pacQueue = [];
    const atlQueue = [];

    for (let i = 0; i < m; i++) {
        pacQueue.push([i, 0]);
        pacific[i][0] = true;
        atlQueue.push([i, n - 1]);
        atlantic[i][n - 1] = true;
    }

    for (let j = 0; j < n; j++) {
        pacQueue.push([0, j]);
        pacific[0][j] = true;
        atlQueue.push([m - 1, j]);
        atlantic[m - 1][j] = true;
    }

    bfs(pacQueue, pacific, heights);
    bfs(atlQueue, atlantic, heights);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

function bfs(queue, ocean, heights) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const m = heights.length;
    const n = heights[0].length;

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n 
                && !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[r][c]) {
                ocean[newRow][newCol] = true;
                queue.push([newRow, newCol]);
            }
        }
    }
}
