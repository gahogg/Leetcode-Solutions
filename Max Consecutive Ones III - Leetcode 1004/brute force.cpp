class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int n = nums.size();
        int maxLen = 0;

        // Iterate over all starting points of subarrays
        for (int i = 0; i < n; ++i) {

            // Check each subarray starting from `i`
            for (int j = i; j < n; ++j) {
                int zeroCount = 0;
                for (int c = i; c <= j; ++c) {
                    if (nums[c] == 0) 
                        zeroCount++;
                }

                // If the number of zeroes exceeds k, 
                // update the maximum length
                if (zeroCount <= k) {
                    maxLen = max(maxLen, j - i + 1);
                }

            }
        }

        return maxLen;
    }
};
