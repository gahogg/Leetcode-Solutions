class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int s = 0;
        int n = nums.size();
        vector<int> prefix_sum(n);
        
        for (int i = 0; i < n; i++) {
            s += nums[i];
            prefix_sum[i] = s;
        }
        
        return prefix_sum;
    }
    // Time: O(n)
    // Space: O(n)
};
