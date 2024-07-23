#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> h;
        for (int i = 0; i < nums.size(); ++i) {
            h[nums[i]] = i;
        }

        for (int i = 0; i < nums.size(); ++i) {
            int y = target - nums[i];
            if (h.find(y) != h.end() && h[y] != i) {
                return {i, h[y]};
            }
        }

        throw invalid_argument("No two sum solution");
    }
};
