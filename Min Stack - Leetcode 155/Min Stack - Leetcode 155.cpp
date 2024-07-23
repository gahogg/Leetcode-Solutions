#include <stack>
using namespace std;

class MinStack {
public:
    MinStack() {}

    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) {
            minStk.push(val);
        } else {
            minStk.push(minStk.top());
        }
    }

    void pop() {
        stk.pop();
        minStk.pop();
    }

    int top() {
        return stk.top();
    }

    int getMin() {
        return minStk.top();
    }

private:
    stack<int> stk;
    stack<int> minStk;
};
