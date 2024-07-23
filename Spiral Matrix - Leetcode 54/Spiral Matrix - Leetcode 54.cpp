#include <vector>

using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> ans;
        if (matrix.empty()) return ans;

        int m = matrix.size();
        int n = matrix[0].size();
        int UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3;
        int direction = RIGHT;

        int UP_WALL = 0;
        int RIGHT_WALL = n;
        int DOWN_WALL = m;
        int LEFT_WALL = -1;

        int i = 0, j = 0;

        while (ans.size() != m * n) {
            if (direction == RIGHT) {
                while (j < RIGHT_WALL) {
                    ans.push_back(matrix[i][j]);
                    j++;
                }
                i++;
                j--;
                RIGHT_WALL--;
                direction = DOWN;
            } else if (direction == DOWN) {
                while (i < DOWN_WALL) {
                    ans.push_back(matrix[i][j]);
                    i++;
                }
                i--;
                j--;
                DOWN_WALL--;
                direction = LEFT;
            } else if (direction == LEFT) {
                while (j > LEFT_WALL) {
                    ans.push_back(matrix[i][j]);
                    j--;
                }
                i--;
                j++;
                LEFT_WALL++;
                direction = UP;
            } else {
                while (i > UP_WALL) {
                    ans.push_back(matrix[i][j]);
                    i--;
                }
                i++;
                j++;
                UP_WALL++;
                direction = RIGHT;
            }
        }

        return ans;
    }
};
