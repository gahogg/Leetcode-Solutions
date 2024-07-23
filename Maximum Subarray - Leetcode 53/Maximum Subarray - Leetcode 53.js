var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum = 0;

    for (const num of nums) {
        currSum += num;
        maxSum = Math.max(maxSum, currSum);

        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
};
