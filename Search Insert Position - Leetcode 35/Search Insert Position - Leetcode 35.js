var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            return m;
        }
    }

    return l;
};
