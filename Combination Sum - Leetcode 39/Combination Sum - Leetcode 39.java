import java.util.*;

public class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> sol = new ArrayList<>();
        backtrack(candidates, target, 0, 0, sol, res);
        return res;
    }

    private void backtrack(int[] candidates, int target, int start, int curSum, List<Integer> sol, List<List<Integer>> res) {
        if (curSum == target) {
            res.add(new ArrayList<>(sol));
            return;
        }
        if (curSum > target || start == candidates.length) {
            return;
        }

        // Skip the current candidate
        backtrack(candidates, target, start + 1, curSum, sol, res);

        // Include the current candidate
        sol.add(candidates[start]);
        backtrack(candidates, target, start, curSum + candidates[start], sol, res);
        sol.remove(sol.size() - 1);
    }
}
