var search = function(nums, target) {
    let n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    let minIndex = l;

    if (minIndex === 0) {
        l = 0;
        r = n - 1;
    } else if (target >= nums[0] && target <= nums[minIndex - 1]) {
        l = 0;
        r = minIndex - 1;
    } else {
        l = minIndex;
        r = n - 1;
    }

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            return m;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
};
