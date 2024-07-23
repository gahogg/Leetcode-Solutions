var twoSum = function(nums, target) {
    const h = new Map();
    for (let i = 0; i < nums.length; i++) {
        h.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const y = target - nums[i];
        if (h.has(y) && h.get(y) !== i) {
            return [i, h.get(y)];
        }
    }

    throw new Error("No two sum solution");
};
