#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int n = height.size();
        int l = 0;
        int r = n - 1;
        int maxArea = 0;

        while (l < r) {
            int w = r - l;
            int h = min(height[l], height[r]);
            int a = w * h;
            maxArea = max(maxArea, a);

            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
};
