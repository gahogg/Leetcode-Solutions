class Solution {
    public int[] runningSum(int[] nums) {
        int s = 0;
        int[] running_sum = new int[nums.length];
        
        for (int i = 0; i < nums.length; i++) {
            s += nums[i];
            running_sum[i] = s;
        }
        
        return running_sum;
    }
    // Time: O(n)
    // Space: O(n)
}
