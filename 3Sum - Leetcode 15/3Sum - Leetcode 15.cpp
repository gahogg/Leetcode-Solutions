#include <vector>
#include <unordered_map>
#include <set>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        unordered_map<int, int> indexMap;
        set<vector<int>> result;
        int n = nums.size();

        // Build the index map
        for (int i = 0; i < n; ++i) {
            indexMap[nums[i]] = i;
        }

        // Iterate over each pair
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int desired = -nums[i] - nums[j];
                if (indexMap.find(desired) != indexMap.end() &&
                    indexMap[desired] != i && indexMap[desired] != j) {
                    vector<int> triplet = {nums[i], nums[j], desired};
                    sort(triplet.begin(), triplet.end());
                    result.insert(triplet);
                }
            }
        }

        return vector<vector<int>>(result.begin(), result.end());
    }
};
