/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const sol = [];
    backtrack(candidates, target, 0, 0, sol, res);
    return res;
};

function backtrack(candidates, target, start, curSum, sol, res) {
    if (curSum === target) {
        res.push([...sol]);
        return;
    }
    if (curSum > target || start === candidates.length) {
        return;
    }

    // Skip the current candidate
    backtrack(candidates, target, start + 1, curSum, sol, res);

    // Include the current candidate
    sol.push(candidates[start]);
    backtrack(candidates, target, start, curSum + candidates[start], sol, res);
    sol.pop();
}
