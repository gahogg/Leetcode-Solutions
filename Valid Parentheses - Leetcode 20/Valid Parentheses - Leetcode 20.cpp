#include <stack>
#include <unordered_map>
#include <string>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        unordered_map<char, char> hashmap = {{')', '('}, {'}', '{'}, {']', '['}};
        stack<char> stk;

        for (char c : s) {
            if (hashmap.find(c) == hashmap.end()) {
                stk.push(c);
            } else {
                if (stk.empty() || stk.top() != hashmap[c]) {
                    return false;
                }
                stk.pop();
            }
        }

        return stk.empty();
    }
};
