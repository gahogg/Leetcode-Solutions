import java.util.HashSet;
import java.util.Set;

public class Solution {
    public int findClosestNumber(int[] nums) {
        int closest = nums[0];
        
        for (int x : nums) {
            if (Math.abs(x) < Math.abs(closest)) {
                closest = x;
            }
        }
        
        if (closest < 0 && contains(nums, Math.abs(closest))) {
            return Math.abs(closest);
        } else {
            return closest;
        }
    }

    private boolean contains(int[] nums, int value) {
        for (int num : nums) {
            if (num == value) {
                return true;
            }
        }
        return false;
    }
}
