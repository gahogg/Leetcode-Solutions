var runningSum = function(nums) {
    var s = 0;
    var running_sum = [];
    
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
        running_sum.push(s);
    }
    
    return running_sum;
    // Time: O(n)
    // Space: O(n)
};
