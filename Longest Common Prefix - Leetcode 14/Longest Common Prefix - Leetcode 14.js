var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let minLength = Infinity;
    for (const s of strs) {
        minLength = Math.min(minLength, s.length);
    }
    
    let i = 0;
    while (i < minLength) {
        for (const s of strs) {
            if (s[i] !== strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }
        i++;
    }
    
    return strs[0].substring(0, i);
};
