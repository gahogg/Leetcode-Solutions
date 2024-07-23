import java.util.*;

public class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> sol = new ArrayList<>();
        backtrack(n, k, sol, ans);
        return ans;
    }

    private void backtrack(int x, int k, List<Integer> sol, List<List<Integer>> ans) {
        if (sol.size() == k) {
            ans.add(new ArrayList<>(sol));
            return;
        }

        if (x > k - sol.size()) {
            backtrack(x - 1, k, sol, ans);
        }

        sol.add(x);
        backtrack(x - 1, k, sol, ans);
        sol.remove(sol.size() - 1);
    }
}
