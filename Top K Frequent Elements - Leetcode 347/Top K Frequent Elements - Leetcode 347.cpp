
#include <vector>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> countMap;
        for (int num : nums) {
            countMap[num]++;
        }
        
        auto cmp = [](const pair<int, int>& a, const pair<int, int>& b) {
            return a.second > b.second;
        };
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(cmp)> minHeap(cmp);
        
        for (auto& entry : countMap) {
            if (minHeap.size() < k) {
                minHeap.push(entry);
            } else {
                minHeap.push(entry);
                minHeap.pop();
            }
        }
        
        vector<int> topK;
        while (!minHeap.empty()) {
            topK.push_back(minHeap.top().first);
            minHeap.pop();
        }
        
        reverse(topK.begin(), topK.end());
        return topK;
    }
};













#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> count;
        for (int num : nums) {
            count[num]++;
        }

        vector<vector<int>> buckets(nums.size() + 1);
        for (auto& entry : count) {
            buckets[entry.second].push_back(entry.first);
        }

        vector<int> result;
        for (int i = buckets.size() - 1; i >= 0; --i) {
            if (!buckets[i].empty()) {
                result.insert(result.end(), buckets[i].begin(), buckets[i].end());
                if (result.size() >= k) {
                    result.resize(k);
                    break;
                }
            }
        }

        return result;
    }
};
