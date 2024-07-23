var characterReplacement = function(s, k) {
    const counts = new Array(26).fill(0);
    let l = 0, longest = 0, maxCount = 0;

    for (let r = 0; r < s.length; r++) {
        maxCount = Math.max(maxCount, ++counts[s.charCodeAt(r) - 65]);

        while ((r - l + 1) - maxCount > k) {
            counts[s.charCodeAt(l) - 65]--;
            l++;
        }

        longest = Math.max(longest, r - l + 1);
    }

    return longest;
};
