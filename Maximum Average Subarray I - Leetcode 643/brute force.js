/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const avg = (vals, start, len) => {
        let sum = 0;
        for (let i = start; i < start + len; i++) {
            sum += vals[i];
        }
        return sum / len;
    };

    // Calculate initial maximum average
    let maxAvg = avg(nums, 0, k);
    for (let i = 0; i <= nums.length - k; i++) {
        maxAvg = Math.max(maxAvg, avg(nums, i, k));
    }

    return maxAvg;
};
