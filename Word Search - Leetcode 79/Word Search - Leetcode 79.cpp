#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size();
        int n = board[0].size();
        int W = word.size();

        if (m == 1 && n == 1) {
            return board[0][0] == word[0];
        }

        vector<vector<bool>> visited(m, vector<bool>(n, false));

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (backtrack(board, word, i, j, 0, visited)) {
                    return true;
                }
            }
        }

        return false;
    }

private:
    bool backtrack(vector<vector<char>>& board, string& word, int i, int j, int index, vector<vector<bool>>& visited) {
        if (index == word.size()) return true;

        if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size() || visited[i][j] || board[i][j] != word[index]) {
            return false;
        }

        visited[i][j] = true;

        bool found = backtrack(board, word, i + 1, j, index + 1, visited) ||
                     backtrack(board, word, i - 1, j, index + 1, visited) ||
                     backtrack(board, word, i, j + 1, index + 1, visited) ||
                     backtrack(board, word, i, j - 1, index + 1, visited);

        visited[i][j] = false;
        return found;
    }
};
