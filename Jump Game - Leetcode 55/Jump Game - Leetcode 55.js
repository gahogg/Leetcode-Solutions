var canJump = function(nums) {
    const n = nums.length;
    let target = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        if (i + nums[i] >= target) {
            target = i;
        }
    }

    return target === 0;
};
