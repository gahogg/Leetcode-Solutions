import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> sol = new ArrayList<>();
        backtrack(nums, 0, sol, res);
        return res;
    }

    private void backtrack(int[] nums, int start, List<Integer> sol, List<List<Integer>> res) {
        res.add(new ArrayList<>(sol));
        for (int i = start; i < nums.length; i++) {
            sol.add(nums[i]);
            backtrack(nums, i + 1, sol, res);
            sol.remove(sol.size() - 1);
        }
    }
}
