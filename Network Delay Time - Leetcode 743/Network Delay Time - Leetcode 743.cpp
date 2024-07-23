#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>

using namespace std;

class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        unordered_map<int, vector<pair<int, int>>> graph;
        for (const auto& time : times) {
            int u = time[0], v = time[1], t = time[2];
            graph[u].emplace_back(v, t);
        }

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> minHeap;
        minHeap.emplace(0, k);
        unordered_map<int, int> minTimes;

        while (!minHeap.empty()) {
            auto [currentTime, node] = minHeap.top();
            minHeap.pop();

            if (minTimes.count(node)) continue;
            minTimes[node] = currentTime;

            for (const auto& [neighbor, time] : graph[node]) {
                if (!minTimes.count(neighbor)) {
                    minHeap.emplace(currentTime + time, neighbor);
                }
            }
        }

        if (minTimes.size() == n) {
            return max_element(minTimes.begin(), minTimes.end(),
                               [](const pair<int, int>& a, const pair<int, int>& b) {
                                   return a.second < b.second;
                               })->second;
        } else {
            return -1;
        }
    }
};
