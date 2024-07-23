#include <vector>
#include <queue>
#include <cmath>
using namespace std;

class Solution {
public:
    int minCostConnectPoints(vector<vector<int>>& points) {
        int n = points.size();
        int totalCost = 0;
        vector<bool> visited(n, false);
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
        minHeap.push({0, 0}); // cost, pointIndex
        
        while (!minHeap.empty()) {
            auto edge = minHeap.top();
            minHeap.pop();
            int cost = edge[0];
            int point = edge[1];
            
            if (visited[point]) continue;
            
            visited[point] = true;
            totalCost += cost;
            
            for (int i = 0; i < n; i++) {
                if (!visited[i]) {
                    int newCost = abs(points[point][0] - points[i][0]) + abs(points[point][1] - points[i][1]);
                    minHeap.push({newCost, i});
                }
            }
        }
        
        return totalCost;
    }
};
