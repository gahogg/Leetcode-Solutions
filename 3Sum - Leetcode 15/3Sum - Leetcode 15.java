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
