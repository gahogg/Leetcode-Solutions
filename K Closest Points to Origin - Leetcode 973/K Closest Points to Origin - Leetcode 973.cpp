#include <vector>
#include <queue>
#include <functional>

using namespace std;

class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        auto dist = [](const vector<int>& point) {
            return point[0] * point[0] + point[1] * point[1];
        };
        
        priority_queue<vector<int>, vector<vector<int>>, function<bool(const vector<int>&, const vector<int>&)>> maxHeap(
            [&dist](const vector<int>& a, const vector<int>& b) {
                return dist(a) < dist(b);
            }
        );

        for (const auto& point : points) {
            maxHeap.push(point);
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        vector<vector<int>> result;
        while (!maxHeap.empty()) {
            result.push_back(maxHeap.top());
            maxHeap.pop();
        }
        return result;
    }
};
