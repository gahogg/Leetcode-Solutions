#include <vector>
#include <algorithm>
#include <cstdlib>

class Solution {
public:
    int threeSumClosest(std::vector<int>& nums, int target) {
        int n = nums.size();
        std::sort(nums.begin(), nums.end());
        int closestSum = INT_MAX;

        for (int i = 0; i < n; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int lo = i + 1, hi = n - 1;
            while (lo < hi) {
                int curSum = nums[i] + nums[lo] + nums[hi];

                if (std::abs(curSum - target) < std::abs(closestSum - target)) {
                    closestSum = curSum;
                }

                if (curSum == target) {
                    return curSum;
                } else if (curSum < target) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
        return closestSum;
    }
};
