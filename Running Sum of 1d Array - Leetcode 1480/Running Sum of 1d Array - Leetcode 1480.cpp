class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int s = 0;
        vector<int> running_sum(nums.size());
        
        for (int i = 0; i < nums.size(); i++) {
            s += nums[i];
            running_sum[i] = s;
        }
        
        return running_sum;
    }
    // Time: O(n)
    // Space: O(n)
};
