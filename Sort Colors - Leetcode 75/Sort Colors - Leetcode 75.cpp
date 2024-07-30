#include <vector>

class Solution {
public:
    void sortColors(std::vector<int>& nums) {
        int counts[3] = {0, 0, 0};

        for (int color : nums) {
            counts[color]++;
        }

        int R = counts[0], W = counts[1], B = counts[2];

        for (int i = 0; i < R; i++) {
            nums[i] = 0;
        }
        for (int i = R; i < R + W; i++) {
            nums[i] = 1;
        }
        for (int i = R + W; i < nums.size(); i++) {
            nums[i] = 2;
        }
    }
};
