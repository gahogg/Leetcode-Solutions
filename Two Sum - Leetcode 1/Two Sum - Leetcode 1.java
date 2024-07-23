import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> h = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            h.put(nums[i], i);
        }

        for (int i = 0; i < nums.length; i++) {
            int y = target - nums[i];
            if (h.containsKey(y) && h.get(y) != i) {
                return new int[] {i, h.get(y)};
            }
        }

        throw new IllegalArgumentException("No two sum solution");
    }
}
