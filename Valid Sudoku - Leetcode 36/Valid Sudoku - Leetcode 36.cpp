#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        // Validate Rows
        for (int i = 0; i < 9; i++) {
            unordered_set<char> set;
            for (int j = 0; j < 9; j++) {
                char item = board[i][j];
                if (item != '.' && !set.insert(item).second) {
                    return false;
                }
            }
        }

        // Validate Columns
        for (int i = 0; i < 9; i++) {
            unordered_set<char> set;
            for (int j = 0; j < 9; j++) {
                char item = board[j][i];
                if (item != '.' && !set.insert(item).second) {
                    return false;
                }
            }
        }

        // Validate 3x3 Sub-grids
        vector<vector<int>> starts = {{0, 0}, {0, 3}, {0, 6},
                                      {3, 0}, {3, 3}, {3, 6},
                                      {6, 0}, {6, 3}, {6, 6}};
        
        for (auto& start : starts) {
            unordered_set<char> set;
            for (int row = start[0]; row < start[0] + 3; row++) {
                for (int col = start[1]; col < start[1] + 3; col++) {
                    char item = board[row][col];
                    if (item != '.' && !set.insert(item).second) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
};
