class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        vector<int> maxLeft(n, 0);
        vector<int> maxRight(n, 0);
        
        int lWall = 0, rWall = 0;
        
        for (int i = 0; i < n; ++i) {
            int j = n - i - 1;
            maxLeft[i] = lWall;
            maxRight[j] = rWall;
            lWall = max(lWall, height[i]);
            rWall = max(rWall, height[j]);
        }
        
        int sum = 0;
        for (int i = 0; i < n; ++i) {
            int pot = min(maxLeft[i], maxRight[i]);
            sum += max(0, pot - height[i]);
        }
        
        return sum;
    }
};
