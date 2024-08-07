var jump = function(nums) {
    var smallest = 0;
    var n = nums.length;
    var end = 0;
    var far = 0;

    for (var i = 0; i < n - 1; i++) {
        far = Math.max(far, i + nums[i]);
        
        if (i == end) {
            smallest++;
            end = far;
        }
    }

    return smallest;
};
