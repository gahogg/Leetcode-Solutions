#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        if (source == destination) return true;

        unordered_map<int, vector<int>> graph;
        for (const auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }

        unordered_set<int> seen;
        seen.insert(source);

        return dfs(source, destination, graph, seen);
    }

private:
    bool dfs(int node, int destination, unordered_map<int, vector<int>>& graph, unordered_set<int>& seen) {
        if (node == destination) return true;

        for (int neighbor : graph[node]) {
            if (seen.find(neighbor) == seen.end()) {
                seen.insert(neighbor);
                if (dfs(neighbor, destination, graph, seen)) return true;
            }
        }
        return false;
    }
};
