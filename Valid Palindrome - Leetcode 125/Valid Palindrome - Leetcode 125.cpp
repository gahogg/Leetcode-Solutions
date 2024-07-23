#include <cctype>
#include <string>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        int L = 0, R = s.size() - 1;

        while (L < R) {
            while (L < R && !isalnum(s[L])) {
                L++;
            }
            while (L < R && !isalnum(s[R])) {
                R--;
            }
            if (L < R && tolower(s[L]) != tolower(s[R])) {
                return false;
            }
            L++;
            R--;
        }
        return true;
    }
};
