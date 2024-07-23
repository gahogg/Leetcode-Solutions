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
