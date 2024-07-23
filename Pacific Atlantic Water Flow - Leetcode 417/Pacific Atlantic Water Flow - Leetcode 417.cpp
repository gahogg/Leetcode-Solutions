#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        vector<vector<int>> result;
        if (heights.empty() || heights[0].empty()) return result;

        int m = heights.size();
        int n = heights[0].size();
        
        vector<vector<bool>> pacific(m, vector<bool>(n, false));
        vector<vector<bool>> atlantic(m, vector<bool>(n, false));
        
        queue<pair<int, int>> pacQueue;
        queue<pair<int, int>> atlQueue;
        
        for (int i = 0; i < m; ++i) {
            pacQueue.push({i, 0});
            pacific[i][0] = true;
            atlQueue.push({i, n - 1});
            atlantic[i][n - 1] = true;
        }
        
        for (int j = 0; j < n; ++j) {
            pacQueue.push({0, j});
            pacific[0][j] = true;
            atlQueue.push({m - 1, j});
            atlantic[m - 1][j] = true;
        }
        
        bfs(pacQueue, pacific, heights);
        bfs(atlQueue, atlantic, heights);
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.push_back({i, j});
                }
            }
        }
        
        return result;
    }

private:
    void bfs(queue<pair<int, int>>& q, vector<vector<bool>>& ocean, vector<vector<int>>& heights) {
        int m = heights.size();
        int n = heights[0].size();
        vector<pair<int, int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        while (!q.empty()) {
            auto [r, c] = q.front();
            q.pop();
            
            for (auto& dir : directions) {
                int newRow = r + dir.first;
                int newCol = c + dir.second;
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n 
                    && !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[r][c]) {
                    ocean[newRow][newCol] = true;
                    q.push({newRow, newCol});
                }
            }
        }
    }
};
