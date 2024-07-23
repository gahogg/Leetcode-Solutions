var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let sum = 0;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        while (sum >= target) {
            minLength = Math.min(minLength, r - l + 1);
            sum -= nums[l++];
        }
    }

    return minLength === Infinity ? 0 : minLength;
};
