/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const indexMap = new Map();
    const result = new Set();
    const n = nums.length;

    // Build the index map
    for (let i = 0; i < n; i++) {
        indexMap.set(nums[i], i);
    }

    // Iterate over each pair
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const desired = -nums[i] - nums[j];
            if (indexMap.has(desired) && indexMap.get(desired) !== i && indexMap.get(desired) !== j) {
                const triplet = [nums[i], nums[j], desired].sort((a, b) => a - b);
                result.add(triplet.toString());
            }
        }
    }

    return Array.from(result, str => str.split(',').map(Number));
};
