/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];

    for (const op of operations) {
        if (op === "+") {
            const top = stack.pop();
            const newTop = top + stack[stack.length - 1];
            stack.push(top);
            stack.push(newTop);
        } else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (op === "C") {
            stack.pop();
        } else {
            stack.push(parseInt(op));
        }
    }

    return stack.reduce((acc, val) => acc + val, 0);
};
