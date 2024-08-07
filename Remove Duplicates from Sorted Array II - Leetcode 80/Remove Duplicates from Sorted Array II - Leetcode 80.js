var removeDuplicates = function(nums) {
    var j = 1;
    var count = 1;
    var n = nums.length;

    for (var i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};
