var spiralOrder = function(matrix) {
    let ans = [];
    if (matrix.length === 0) return ans;

    let m = matrix.length;
    let n = matrix[0].length;
    const UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3;
    let direction = RIGHT;

    let UP_WALL = 0;
    let RIGHT_WALL = n;
    let DOWN_WALL = m;
    let LEFT_WALL = -1;

    let i = 0, j = 0;

    while (ans.length !== m * n) {
        if (direction === RIGHT) {
            while (j < RIGHT_WALL) {
                ans.push(matrix[i][j]);
                j++;
            }
            i++;
            j--;
            RIGHT_WALL--;
            direction = DOWN;
        } else if (direction === DOWN) {
            while (i < DOWN_WALL) {
                ans.push(matrix[i][j]);
                i++;
            }
            i--;
            j--;
            DOWN_WALL--;
            direction = LEFT;
        } else if (direction === LEFT) {
            while (j > LEFT_WALL) {
                ans.push(matrix[i][j]);
                j--;
            }
            i--;
            j++;
            LEFT_WALL++;
            direction = UP;
        } else {
            while (i > UP_WALL) {
                ans.push(matrix[i][j]);
                i--;
            }
            i++;
            j++;
            UP_WALL++;
            direction = RIGHT;
        }
    }

    return ans;
};
