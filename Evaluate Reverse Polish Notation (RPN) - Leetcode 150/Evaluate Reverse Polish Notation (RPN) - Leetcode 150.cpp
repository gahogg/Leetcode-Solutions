#include <vector>
#include <string>
#include <stack>
#include <cmath> // For std::ceil and std::floor
using namespace std;

/**
 * @param tokens: A vector of strings representing the RPN expression
 * @return: The result of the RPN expression
 */
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> stk;

        for (const auto& t : tokens) {
            if (t == "+" || t == "-" || t == "*" || t == "/") {
                int b = stk.top(); stk.pop();
                int a = stk.top(); stk.pop();
                
                if (t == "+") stk.push(a + b);
                else if (t == "-") stk.push(a - b);
                else if (t == "*") stk.push(a * b);
                else {
                    double division = static_cast<double>(a) / b;
                    stk.push(division < 0 ? static_cast<int>(ceil(division)) : static_cast<int>(floor(division)));
                }
            } else {
                stk.push(stoi(t));
            }
        }
        
        return stk.top();
    }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
