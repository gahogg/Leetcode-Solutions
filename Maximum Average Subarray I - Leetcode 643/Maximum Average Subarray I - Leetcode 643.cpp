class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        int n = nums.size();
        double cur_sum = 0;

        for (int i = 0; i < k; ++i) {
            cur_sum += nums[i];
        }

        double max_avg = cur_sum / k;

        for (int i = k; i < n; ++i) {
            cur_sum += nums[i];
            cur_sum -= nums[i - k];

            double avg = cur_sum / k;
            max_avg = max(max_avg, avg);
        }

        return max_avg;
    }
};
