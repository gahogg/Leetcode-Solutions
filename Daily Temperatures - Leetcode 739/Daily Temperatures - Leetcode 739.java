import java.util.*;

public class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] answer = new int[n];
        Stack<int[]> stack = new Stack<>();

        for (int i = 0; i < n; i++) {
            int temp = temperatures[i];
            while (!stack.isEmpty() && stack.peek()[0] < temp) {
                int[] prev = stack.pop();
                answer[prev[1]] = i - prev[1];
            }
            stack.push(new int[]{temp, i});
        }
        return answer;
    }
}
