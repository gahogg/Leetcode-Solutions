public class Solution {
    public int maxArea(int[] height) {
        int n = height.length;
        int l = 0;
        int r = n - 1;
        int maxArea = 0;

        while (l < r) {
            int w = r - l;
            int h = Math.min(height[l], height[r]);
            int a = w * h;
            maxArea = Math.max(maxArea, a);

            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
