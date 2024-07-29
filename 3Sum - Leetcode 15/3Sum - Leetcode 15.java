// Hashmap Solution:
import java.util.*;

public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>> result = new HashSet<>();
        Map<Integer, Integer> indexMap = new HashMap<>();
        int n = nums.length;

        // Build the index map
        for (int i = 0; i < n; i++) {
            indexMap.put(nums[i], i);
        }

        // Iterate over each pair
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int desired = -nums[i] - nums[j];
                if (indexMap.containsKey(desired) && indexMap.get(desired) != i && indexMap.get(desired) != j) {
                    List<Integer> triplet = Arrays.asList(nums[i], nums[j], desired);
                    Collections.sort(triplet);
                    result.add(triplet);
                }
            }
        }

        return new ArrayList<>(result);
    }
}


// Two Pointer Solution:
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        List<List<Integer>> answer = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                break;
            }
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int lo = i + 1, hi = n - 1;
            while (lo < hi) {
                int sum = nums[i] + nums[lo] + nums[hi];
                if (sum == 0) {
                    answer.add(Arrays.asList(nums[i], nums[lo], nums[hi]));
                    lo++;
                    hi--;
                    while (lo < hi && nums[lo] == nums[lo - 1]) lo++;
                    while (lo < hi && nums[hi] == nums[hi + 1]) hi--;
                } else if (sum < 0) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }

        return answer;
    }
}
