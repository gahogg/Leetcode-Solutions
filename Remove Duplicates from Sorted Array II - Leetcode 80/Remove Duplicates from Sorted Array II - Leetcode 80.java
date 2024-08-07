class Solution {
    public int removeDuplicates(int[] nums) {
        int j = 1;
        int count = 1;
        int n = nums.length;

        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1]) {
                count++;
            } else {
                count = 1;
            }

            if (count <= 2) {
                nums[j] = nums[i];
                j++;
            }
        }

        return j;
    }
}
