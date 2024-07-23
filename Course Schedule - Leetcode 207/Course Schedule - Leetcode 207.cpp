#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        unordered_map<int, vector<int>> graph;
        for (const auto& pair : prerequisites) {
            graph[pair[0]].push_back(pair[1]);
        }

        vector<int> states(numCourses, 0); // 0: UNVISITED, 1: VISITING, 2: VISITED

        for (int i = 0; i < numCourses; ++i) {
            if (!dfs(i, graph, states)) {
                return false;
            }
        }

        return true;
    }

private:
    bool dfs(int node, unordered_map<int, vector<int>>& graph, vector<int>& states) {
        if (states[node] == 1) return false; // Cycle detected
        if (states[node] == 2) return true;  // Already visited

        states[node] = 1; // Mark as visiting

        for (int neighbor : graph[node]) {
            if (!dfs(neighbor, graph, states)) {
                return false;
            }
        }

        states[node] = 2; // Mark as visited
        return true;
    }
};
