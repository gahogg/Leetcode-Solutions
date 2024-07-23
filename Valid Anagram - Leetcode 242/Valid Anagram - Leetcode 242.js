var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sCount = {};
    const tCount = {};

    for (const char of s) {
        sCount[char] = (sCount[char] || 0) + 1;
    }

    for (const char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    for (const key in sCount) {
        if (sCount[key] !== tCount[key]) {
            return false;
        }
    }

    return true;
};
