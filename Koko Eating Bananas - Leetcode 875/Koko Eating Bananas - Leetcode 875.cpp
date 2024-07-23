#include <vector>
#include <algorithm>
#include <cmath>

class Solution {
public:
    int minEatingSpeed(std::vector<int>& piles, int h) {
        int left = 1;
        int right = *std::max_element(piles.begin(), piles.end());

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (canFinish(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

private:
    bool canFinish(const std::vector<int>& piles, int h, int k) {
        int hours = 0;
        for (int pile : piles) {
            hours += std::ceil(static_cast<double>(pile) / k);
        }
        return hours <= h;
    }
};
