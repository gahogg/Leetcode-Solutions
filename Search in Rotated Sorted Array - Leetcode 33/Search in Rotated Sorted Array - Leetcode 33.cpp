class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size();
        int l = 0;
        int r = n - 1;

        while (l < r) {
            int m = (l + r) / 2;

            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        int minIndex = l;

        if (minIndex == 0) {
            l = 0;
            r = n - 1;
        } else if (target >= nums[0] && target <= nums[minIndex - 1]) {
            l = 0;
            r = minIndex - 1;
        } else {
            l = minIndex;
            r = n - 1;
        }

        while (l <= r) {
            int m = (l + r) / 2;
            if (nums[m] == target) {
                return m;
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }
};
