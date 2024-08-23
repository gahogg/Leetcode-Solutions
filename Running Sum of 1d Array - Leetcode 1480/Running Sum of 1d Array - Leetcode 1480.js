var runningSum = function(nums) {
    var s = 0;
    var n = nums.length;
    var prefix_sum = new Array(n).fill(0);
    
    for (var i = 0; i < n; i++) {
        s += nums[i];
        prefix_sum[i] = s;
    }
    
    return prefix_sum;
    // Time: O(n)
    // Space: O(n)
};
