class Solution {
    public int jump(int[] nums) {
        int smallest = 0;
        int n = nums.length;
        int end = 0;
        int far = 0;

        for (int i = 0; i < n - 1; i++) {
            far = Math.max(far, i + nums[i]);
            
            if (i == end) {
                smallest++;
                end = far;
            }
        }

        return smallest;
    }
}
