var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let length = 1;
            let nextNum = num + 1;
            while (set.has(nextNum)) {
                length++;
                nextNum++;
            }
            longest = Math.max(longest, length);
        }
    }

    return longest;
};
