/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    const sol = [];
    backtrack(n, k, sol, ans);
    return ans;
};

function backtrack(x, k, sol, ans) {
    if (sol.length === k) {
        ans.push([...sol]);
        return;
    }

    if (x > k - sol.length) {
        backtrack(x - 1, k, sol, ans);
    }

    sol.push(x);
    backtrack(x - 1, k, sol, ans);
    sol.pop();
}
