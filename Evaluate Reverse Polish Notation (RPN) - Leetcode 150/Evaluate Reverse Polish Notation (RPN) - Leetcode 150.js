/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            let b = stack.pop();
            let a = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    let division = a / b;
                    stack.push(division < 0 ? Math.ceil(division) : Math.floor(division));
                    break;
            }
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack[0];
};

// Time Complexity: O(n)
// Space Complexity: O(n)
