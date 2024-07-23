class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int max_w = 0;
        int num_zeros = 0;
        int l = 0;

        for (int r = 0; r < nums.size(); ++r) {
            if (nums[r] == 0) {
                num_zeros++;
            }

            while (num_zeros > k) {
                if (nums[l] == 0) {
                    num_zeros--;
                }
                l++;
            }

            max_w = max(max_w, r - l + 1);
        }

        return max_w;
    }
};
