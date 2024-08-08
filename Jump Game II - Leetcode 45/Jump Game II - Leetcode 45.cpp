// Brute Force
#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int jump(std::vector<int>& nums) {
        int n = nums.size();
        int smallest = INT_MAX;

        backtrack(0, 0, nums, n, smallest);
        return smallest;
    }

private:
    void backtrack(int i, int jumps, std::vector<int>& nums, int n, int& smallest) {
        if (i == n - 1) {
            smallest = std::min(smallest, jumps);
            return;
        }

        int maxJump = nums[i];
        int maxReachableIndex = std::min(i + maxJump, n - 1);

        for (int newIndex = maxReachableIndex; newIndex > i; newIndex--) {
            backtrack(newIndex, jumps + 1, nums, n, smallest);
        }
    }
};


// Optimal
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
