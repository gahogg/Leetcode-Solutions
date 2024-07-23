#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        const int EMPTY = 0, FRESH = 1, ROTTEN = 2;
        int m = grid.size(), n = grid[0].size();
        int numFresh = 0;
        queue<pair<int, int>> q;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == ROTTEN) {
                    q.push({i, j});
                } else if (grid[i][j] == FRESH) {
                    numFresh++;
                }
            }
        }

        if (numFresh == 0) return 0;

        int numMinutes = -1;
        while (!q.empty()) {
            int qSize = q.size();
            numMinutes++;
            
            for (int k = 0; k < qSize; k++) {
                auto pos = q.front();
                q.pop();
                int i = pos.first, j = pos.second;
                for (auto dir : vector<vector<int>>{{0,1},{1,0},{0,-1},{-1,0}}) {
                    int r = i + dir[0], c = j + dir[1];
                    if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == FRESH) {
                        grid[r][c] = ROTTEN;
                        numFresh--;
                        q.push({r, c});
                    }
                }
            }
        }

        return numFresh == 0 ? numMinutes : -1;
    }
};
