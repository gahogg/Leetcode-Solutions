var isPalindrome = function(s) {
    let L = 0, R = s.length - 1;

    while (L < R) {
        while (L < R && !/[a-zA-Z0-9]/.test(s[L])) {
            L++;
        }
        while (L < R && !/[a-zA-Z0-9]/.test(s[R])) {
            R--;
        }
        if (L < R && s[L].toLowerCase() !== s[R].toLowerCase()) {
            return false;
        }
        L++;
        R--;
    }
    return true;
};
