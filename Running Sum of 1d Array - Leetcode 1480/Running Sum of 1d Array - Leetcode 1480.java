class Solution {
    public int[] runningSum(int[] nums) {
        int s = 0;
        int n = nums.length;
        int[] prefix_sum = new int[n];
        
        for (int i = 0; i < n; i++) {
            s += nums[i];
            prefix_sum[i] = s;
        }
        
        return prefix_sum;
    }
    // Time: O(n)
    // Space: O(n)
}
