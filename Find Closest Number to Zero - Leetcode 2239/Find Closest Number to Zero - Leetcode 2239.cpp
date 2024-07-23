#include <vector>
#include <cmath>
#include <algorithm>

class Solution {
public:
    int findClosestNumber(const std::vector<int>& nums) {
        int closest = nums[0];

        for (int x : nums) {
            if (std::abs(x) < std::abs(closest)) {
                closest = x;
            }
        }

        if (closest < 0 && std::find(nums.begin(), nums.end(), std::abs(closest)) != nums.end()) {
            return std::abs(closest);
        } else {
            return closest;
        }
    }
};
