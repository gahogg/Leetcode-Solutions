#include <string>
#include <vector>

class Solution {
public:
    std::string convert(const std::string& s, int numRows) {
        if (numRows == 1) return s;

        std::vector<std::string> rows(std::min(numRows, int(s.length())));
        int i = 0;
        bool goingDown = false;

        for (char c : s) {
            rows[i] += c;
            if (i == 0 || i == numRows - 1) goingDown = !goingDown;
            i += goingDown ? 1 : -1;
        }

        std::string result;
        for (const std::string& row : rows) {
            result += row;
        }
        return result;
    }
};
