import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> ans = new ArrayList<>();
        int n = nums.length;
        int i = 0;

        while (i < n) {
            int start = nums[i];
            while (i < n - 1 && nums[i] + 1 == nums[i + 1]) {
                i++;
            }
            if (start != nums[i]) {
                ans.add(start + "->" + nums[i]);
            } else {
                ans.add(String.valueOf(nums[i]));
            }
            i++;
        }

        return ans;
    }
}
