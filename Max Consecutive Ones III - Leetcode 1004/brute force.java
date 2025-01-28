public class Solution {
    public int longestOnes(int[] nums, int k) {
        int maxLength = 0;

        // Iterate over all starting points
        for (int i = 0; i < nums.length; i++) {

            // Iterate over all possible subarrays starting from i
            for (int j = i; j < nums.length; j++) {

                int zeroCount = 0;
                for (int c = i; c <= j; ++c) {
                    if (nums[c] == 0)
                        ++zeroCount;
                }

                // Update maxLength if this subarray is valid
                if (zeroCount <= k) {
                    maxLength = Math.max(maxLength, j - i + 1);
                }
                
            }
        }

        return maxLength;
    }
}
