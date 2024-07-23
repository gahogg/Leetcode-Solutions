/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest = nums[0];
    
    for (let x of nums) {
        if (Math.abs(x) < Math.abs(closest)) {
            closest = x;
        }
    }
    
    if (closest < 0 && nums.includes(Math.abs(closest))) {
        return Math.abs(closest);
    } else {
        return closest;
    }
};
