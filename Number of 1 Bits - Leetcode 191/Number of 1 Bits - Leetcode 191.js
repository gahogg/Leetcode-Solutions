var hammingWeight = function(n) {
    var ans = 0;

    while (n !== 0) {
        ans++;
        n &= (n - 1);
    }

    return ans;
};
