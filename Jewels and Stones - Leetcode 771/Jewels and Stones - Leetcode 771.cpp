#include <unordered_set>
#include <string>

class Solution {
public:
    int numJewelsInStones(std::string jewels, std::string stones) {
        std::unordered_set<char> jewelSet(jewels.begin(), jewels.end());

        int count = 0;
        for (char stone : stones) {
            if (jewelSet.find(stone) != jewelSet.end()) {
                count++;
            }
        }

        return count;
    }
};
