#include <string>
#include <algorithm>

class Solution {
public:
    std::string convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }

        int originalNum = num;
        num = abs(num);
        std::string remainders;

        while (num > 0) {
            int remainder = num % 7;
            remainders.push_back(remainder + '0');
            num /= 7;
        }

        if (originalNum < 0) {
            remainders.push_back('-');
        }

        std::reverse(remainders.begin(), remainders.end());
        return remainders;
    }
};
