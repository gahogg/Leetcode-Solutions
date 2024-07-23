#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> set(nums.begin(), nums.end());
        int longest = 0;

        for (int num : set) {
            if (set.find(num - 1) == set.end()) {
                int length = 1;
                int nextNum = num + 1;
                while (set.find(nextNum) != set.end()) {
                    length++;
                    nextNum++;
                }
                longest = max(longest, length);
            }
        }

        return longest;
    }
};
