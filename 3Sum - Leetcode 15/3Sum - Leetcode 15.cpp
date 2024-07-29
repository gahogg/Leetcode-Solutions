
// Hashmap Solution:
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


// Two Pointer Solution:
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<vector<int>> answer;

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                break;
            }
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int lo = i + 1, hi = n - 1;
            while (lo < hi) {
                int sum = nums[i] + nums[lo] + nums[hi];
                if (sum == 0) {
                    answer.push_back({nums[i], nums[lo], nums[hi]});
                    lo++;
                    hi--;
                    while (lo < hi && nums[lo] == nums[lo - 1]) lo++;
                    while (lo < hi && nums[hi] == nums[hi + 1]) hi--;
                } else if (sum < 0) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }

        return answer;
    }
};

