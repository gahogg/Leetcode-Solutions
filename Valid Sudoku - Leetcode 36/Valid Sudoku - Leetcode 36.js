var isValidSudoku = function(board) {
    // Validate Rows
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            let item = board[i][j];
            if (item !== '.' && set.has(item)) {
                return false;
            }
            set.add(item);
        }
    }

    // Validate Columns
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            let item = board[j][i];
            if (item !== '.' && set.has(item)) {
                return false;
            }
            set.add(item);
        }
    }

    // Validate 3x3 Sub-grids
    let starts = [[0, 0], [0, 3], [0, 6],
                  [3, 0], [3, 3], [3, 6],
                  [6, 0], [6, 3], [6, 6]];
    
    for (let [startRow, startCol] of starts) {
        let set = new Set();
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                let item = board[row][col];
                if (item !== '.' && set.has(item)) {
                    return false;
                }
                set.add(item);
            }
        }
    }

    return true;
};
