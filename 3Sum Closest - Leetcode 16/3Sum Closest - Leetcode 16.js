var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let closestSum = Infinity;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let lo = i + 1, hi = n - 1;
        while (lo < hi) {
            let curSum = nums[i] + nums[lo] + nums[hi];

            if (Math.abs(curSum - target) < Math.abs(closestSum - target)) {
                closestSum = curSum;
            }

            if (curSum === target) {
                return curSum;
            } else if (curSum < target) {
                lo++;
            } else {
                hi--;
            }
        }
    }
    return closestSum;
};
