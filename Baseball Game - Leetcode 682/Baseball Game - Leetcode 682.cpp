#include <vector>
#include <stack>
#include <string>
#include <sstream>

using namespace std;

class Solution {
public:
    int calPoints(vector<string>& operations) {
        stack<int> stk;

        for (const string& op : operations) {
            if (op == "+") {
                int top = stk.top(); stk.pop();
                int newTop = top + stk.top();
                stk.push(top);
                stk.push(newTop);
            } else if (op == "D") {
                stk.push(2 * stk.top());
            } else if (op == "C") {
                stk.pop();
            } else {
                stk.push(stoi(op));
            }
        }

        int sum = 0;
        while (!stk.empty()) {
            sum += stk.top(); stk.pop();
        }

        return sum;
    }
};
