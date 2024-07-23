public class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;
        int W = word.length();

        if (m == 1 && n == 1) {
            return board[0][0] == word.charAt(0);
        }

        boolean[][] visited = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrack(board, word, i, j, 0, visited)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean backtrack(char[][] board, String word, int i, int j, int index, boolean[][] visited) {
        if (index == word.length()) return true;

        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || visited[i][j] || board[i][j] != word.charAt(index)) {
            return false;
        }

        visited[i][j] = true;

        boolean found = backtrack(board, word, i + 1, j, index + 1, visited) ||
                        backtrack(board, word, i - 1, j, index + 1, visited) ||
                        backtrack(board, word, i, j + 1, index + 1, visited) ||
                        backtrack(board, word, i, j - 1, index + 1, visited);

        visited[i][j] = false;
        return found;
    }
}
