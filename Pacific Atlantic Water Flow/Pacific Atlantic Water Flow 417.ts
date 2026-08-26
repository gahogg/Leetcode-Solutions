const input = [
  [1, 2, 2, 3, 5],
  [1, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

// each number represents an elevation.
// return all of the indexes i,j which flow water down to both oceans.
// for example, position 0,5 is a 5. This is already touching both oceans.
// position 2,2 is a 5. This flows water up to 3, then up to 2, then up to pacific.
// it also flows down to 1, then down to 1, then down to pacific.
// in this case, both positions 0,5 and 2,2 are valid, and should be returned.

// first we look at all cells which immediately touch the pacific ocean.
// we do a BFS to see any adjacent cells which are > the cell they touch, and continue the process.
// we do the same for any cells immediately touching the atlantic ocean.
// the dataset we return will be an intersection of all cells which touch both atlantic and pacific.

function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = new Set<string>();
  const atlantic = new Set<string>();
  const output: number[][] = [];

  // fill pacific stack with border cells that can reach the pacific
  // fill atlantic stack with border cells that can reach the atlantic
  for (let c = 0; c < cols; c++) {
    dfs(heights, 0, c, heights[0][c], pacific);
    dfs(heights, rows - 1, c, heights[rows - 1][c], atlantic);
  }

  for (let r = 0; r < rows; r++) {
    dfs(heights, r, 0, heights[r][0], pacific);
    dfs(heights, r, cols - 1, heights[r][cols - 1], atlantic);
  }

  // intersection of pacific keys which reach pacific and atlantic keys which reach atlantic
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = encode(r, c);
      if (pacific.has(key) && atlantic.has(key)) {
        output.push([r, c]);
      }
    }
  }

  return output;
}

function dfs(
  grid: number[][],
  r: number,
  c: number,
  max: number,
  visited: Set<string>
): void {
  const rows = grid.length;
  const cols = grid[0].length;

  if (
    visited.has(encode(r, c)) ||
    r < 0 ||
    r >= rows ||
    c < 0 ||
    c >= cols ||
    grid[r][c] < max
  ) {
    return;
  }
  visited.add(encode(r, c));

  dfs(grid, r + 1, c, grid[r][c], visited);
  dfs(grid, r - 1, c, grid[r][c], visited);
  dfs(grid, r, c + 1, grid[r][c], visited);
  dfs(grid, r, c - 1, grid[r][c], visited);
}

function encode(x: number, y: number) {
  return `${x},${y}`;
}
