/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stk = [];

    for (let i = 0; i < n; i++) {
        const t = temperatures[i];
        while (stk.length > 0 && stk[stk.length - 1][0] < t) {
            const [stkT, stkI] = stk.pop();
            answer[stkI] = i - stkI;
        }
        stk.push([t, i]);
    }

    return answer;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
