var rob = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    let prev = nums[0];
    let curr = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        const temp = curr;
        curr = Math.max(nums[i] + prev, curr);
        prev = temp;
    }

    return curr;
};
