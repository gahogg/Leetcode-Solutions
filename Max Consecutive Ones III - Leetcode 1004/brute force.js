/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLength = 0;

    // Iterate over all starting points
    for (let i = 0; i < nums.length; i++) {

        // Iterate over all possible subarrays starting from i
        for (let j = i; j < nums.length; j++) {
            let zeroCount = 0;
            for (let c = i; c <= j; ++c) {
                if (nums[c] == 0)
                    ++zeroCount;
            }
            
            // If the number of zeroes exceeds k, 
            // update the maximum length
            if (zeroCount <= k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
            
        }
    }

    return maxLength;
};
