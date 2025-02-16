#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n, 1);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
        }

        return *max_element(dp.begin(), dp.end());
    }
};


class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> lis;
        
        for(auto num: nums){
            
            auto it = lower_bound(lis.begin(),lis.end(),num);
            
            if(it == lis.end()) lis.push_back(num);
            else *it = num;
        
        }
        
        return lis.size();
    }

    // Time: O(nlog(n))
    // Space: O(n)
    // Binary search optimization
};
