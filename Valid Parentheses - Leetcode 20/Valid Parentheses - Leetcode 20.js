var isValid = function(s) {
    const hashmap = { ')': '(', '}': '{', ']': '[' };
    const stk = [];

    for (const c of s) {
        if (!(c in hashmap)) {
            stk.push(c);
        } else {
            if (stk.length === 0 || stk.pop() !== hashmap[c]) {
                return false;
            }
        }
    }

    return stk.length === 0;
};
