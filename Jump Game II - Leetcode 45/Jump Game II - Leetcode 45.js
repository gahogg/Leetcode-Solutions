// Brute Force
var jump = function(nums) {
    var n = nums.length;
    var smallest = [Infinity];

    function backtrack(i, jumps) {
        if (i === n - 1) {
            smallest[0] = Math.min(smallest[0], jumps);
            return;
        }

        var maxJump = nums[i];
        var maxReachableIndex = Math.min(i + maxJump, n - 1);

        for (var newIndex = maxReachableIndex; newIndex > i; newIndex--) {
            backtrack(newIndex, jumps + 1);
        }
    }

    backtrack(0, 0);
    return smallest[0];
};


// Optimal
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
