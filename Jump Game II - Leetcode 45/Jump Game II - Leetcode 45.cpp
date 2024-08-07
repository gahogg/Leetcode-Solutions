#include <vector>
#include <algorithm>

class Solution {
public:
    int jump(std::vector<int>& nums) {
        int smallest = 0;
        int n = nums.size();
        int end = 0;
        int far = 0;

        for (int i = 0; i < n - 1; i++) {
            far = std::max(far, i + nums[i]);
            
            if (i == end) {
                smallest++;
                end = far;
            }
        }

        return smallest;
    }
};
