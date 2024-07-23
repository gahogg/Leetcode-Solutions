/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let twoBack = 1;
    let oneBack = 2;

    for (let i = 2; i < n; i++) {
        const nextNum = twoBack + oneBack;
        twoBack = oneBack;
        oneBack = nextNum;
    }

    return oneBack;
};
