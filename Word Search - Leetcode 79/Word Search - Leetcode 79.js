var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const W = word.length;

    if (m === 1 && n === 1) {
        return board[0][0] === word;
    }

    const backtrack = function(i, j, index) {
        if (index === W) return true;
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[index]) return false;

        const char = board[i][j];
        board[i][j] = "#";

        const found = backtrack(i + 1, j, index + 1) ||
                      backtrack(i - 1, j, index + 1) ||
                      backtrack(i, j + 1, index + 1) ||
                      backtrack(i, j - 1, index + 1);

        board[i][j] = char;
        return found;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
