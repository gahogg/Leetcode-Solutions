#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int minSubArrayLen(int target, std::vector<int>& nums) {
        int minLength = INT_MAX;
        int sum = 0;
        int l = 0;

        for (int r = 0; r < nums.size(); ++r) {
            sum += nums[r];
            while (sum >= target) {
                minLength = std::min(minLength, r - l + 1);
                sum -= nums[l++];
            }
        }

        return minLength == INT_MAX ? 0 : minLength;
    }
};
