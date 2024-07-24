// Recursive DFS

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

// Iterative DFS With Stack

#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>

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
        stack<int> stack;
        stack.push(source);
        seen.insert(source);

        while (!stack.empty()) {
            int node = stack.top();
            stack.pop();
            if (node == destination) return true;

            for (int neighbor : graph[node]) {
                if (seen.find(neighbor) == seen.end()) {
                    seen.insert(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return false;
    }
};

// BFS With Queue
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <queue>

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
        queue<int> queue;
        queue.push(source);
        seen.insert(source);

        while (!queue.empty()) {
            int node = queue.front();
            queue.pop();
            if (node == destination) return true;

            for (int neighbor : graph[node]) {
                if (seen.find(neighbor) == seen.end()) {
                    seen.insert(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return false;
    }
};
