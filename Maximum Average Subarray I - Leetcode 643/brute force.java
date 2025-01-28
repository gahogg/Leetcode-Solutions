class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double max_avg = 0;

        // setting max_avg to any constant numeric value 
        // here is incorrect!!! 
        // So initialize it with some values from the input
        for (int i = 0; i < k; ++i)
            max_avg += nums[i];
        max_avg /= k;

        for (int i = 0; i <= nums.length - k; ++i) {
            double avg = 0;
            for (int j = i; j < i + k; ++j)
                avg += nums[j];
            avg /= k;
            max_avg = Math.max(max_avg, avg); 
        }
        return max_avg;

    }
}
