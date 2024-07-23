function orangesRotting(grid) {
    const EMPTY = 0, FRESH = 1, ROTTEN = 2;
    const m = grid.length, n = grid[0].length;
    let numFresh = 0;
    const q = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === ROTTEN) {
                q.push([i, j]);
            } else if (grid[i][j] === FRESH) {
                numFresh++;
            }
        }
    }

    if (numFresh === 0) return 0;

    let numMinutes = -1;
    while (q.length > 0) {
        const qSize = q.length;
        numMinutes++;
        
        for (let k = 0; k < qSize; k++) {
            const [i, j] = q.shift();
            const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
            for (const [di, dj] of dirs) {
                const r = i + di, c = j + dj;
                if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] === FRESH) {
                    grid[r][c] = ROTTEN;
                    numFresh--;
                    q.push([r, c]);
                }
            }
        }
    }

    return numFresh === 0 ? numMinutes : -1;
}
