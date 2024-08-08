// Brute Force
public class Solution {
    public int jump(int[] nums) {
        int n = nums.length;
        int[] smallest = {Integer.MAX_VALUE};

        backtrack(0, 0, nums, n, smallest);
        return smallest[0];
    }

    private void backtrack(int i, int jumps, int[] nums, int n, int[] smallest) {
        if (i == n - 1) {
            smallest[0] = Math.min(smallest[0], jumps);
            return;
        }

        int maxJump = nums[i];
        int maxReachableIndex = Math.min(i + maxJump, n - 1);

        for (int newIndex = maxReachableIndex; newIndex > i; newIndex--) {
            backtrack(newIndex, jumps + 1, nums, n, smallest);
        }
    }
}


// Optimal
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
