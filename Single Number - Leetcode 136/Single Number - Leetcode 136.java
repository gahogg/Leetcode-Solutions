public class Solution {
    public int singleNumber(int[] nums) {
        int a = 0;
        for (int x : nums) {
            a ^= x;
        }
        return a;
    }
}
