var findMaxAverage = function(nums, k) {
    let curSum = 0;
    
    for (let i = 0; i < k; i++) {
        curSum += nums[i];
    }

    let maxAvg = curSum / k;

    for (let i = k; i < nums.length; i++) {
        curSum += nums[i];
        curSum -= nums[i - k];

        let avg = curSum / k;
        maxAvg = Math.max(maxAvg, avg);
    }

    return maxAvg;
};
