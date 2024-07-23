var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[index--] = nums[left] * nums[left];
            left++;
        } else {
            result[index--] = nums[right] * nums[right];
            right--;
        }
    }

    return result;
};
