#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 1) return nums[0];
        if (n == 2) return max(nums[0], nums[1]);

        int prev = nums[0];
        int curr = max(nums[0], nums[1]);

        for (int i = 2; i < n; i++) {
            int temp = curr;
            curr = max(nums[i] + prev, curr);
            prev = temp;
        }

        return curr;
    }
};
