// Hashmap Solution:

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


// Two Pointer Solution:
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let answer = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let lo = i + 1, hi = n - 1;
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (sum === 0) {
                answer.push([nums[i], nums[lo], nums[hi]]);
                lo++;
                hi--;
                while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
                while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
            } else if (sum < 0) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return answer;
};
