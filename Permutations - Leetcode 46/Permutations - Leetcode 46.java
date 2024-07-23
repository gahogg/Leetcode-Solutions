import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> sol = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        
        backtrack(nums, ans, sol, used);
        return ans;
    }
    
    private void backtrack(int[] nums, List<List<Integer>> ans, List<Integer> sol, boolean[] used) {
        if (sol.size() == nums.length) {
            ans.add(new ArrayList<>(sol));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            sol.add(nums[i]);
            used[i] = true;
            backtrack(nums, ans, sol, used);
            sol.remove(sol.size() - 1);
            used[i] = false;
        }
    }
}
