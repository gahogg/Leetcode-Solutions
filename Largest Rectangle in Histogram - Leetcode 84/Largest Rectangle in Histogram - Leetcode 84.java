class Solution {
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        Stack<int[]> stk = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            int height = heights[i];
            int start = i;
            while (!stk.isEmpty() && height < stk.peek()[0]) {
                int[] popped = stk.pop();
                int h = popped[0];
                int j = popped[1];
                int w = i - j;
                maxArea = Math.max(maxArea, h * w);
                start = j;
            }
            stk.push(new int[]{height, start});
        }

        while (!stk.isEmpty()) {
            int[] popped = stk.pop();
            int h = popped[0];
            int j = popped[1];
            int w = n - j;
            maxArea = Math.max(maxArea, h * w);
        }

        return maxArea;
    }
}
