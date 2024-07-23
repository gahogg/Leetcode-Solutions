#include <string>
using namespace std;

class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int A = word1.size(), B = word2.size();
        int a = 0, b = 0;
        string result;

        while (a < A && b < B) {
            result += word1[a++];
            result += word2[b++];
        }

        while (a < A) {
            result += word1[a++];
        }

        while (b < B) {
            result += word2[b++];
        }

        return result;
    }
};
