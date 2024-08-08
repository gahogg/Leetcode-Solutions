#include <vector>
#include <algorithm>

class Solution {
public:
    int hIndex(std::vector<int>& citations) {
        int n = citations.size();
        std::vector<int> paperCounts(n + 1, 0);

        for (int c : citations) {
            paperCounts[std::min(n, c)]++;
        }

        int h = n;
        int papers = paperCounts[n];

        while (papers < h) {
            h--;
            papers += paperCounts[h];
        }

        return h;
    }
};
