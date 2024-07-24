public class Solution {
    public int fib(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return fib(n - 1) + fib(n - 2);
        }
    }
    // Naive Recursive Solution
    // Time: O(2^n)
    // Space: O(n)
    
}


import java.util.HashMap;
import java.util.Map;

public class Solution {
    private Map<Integer, Integer> memo = new HashMap<>();

    public int fib(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }

        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        int result = fib(n - 1) + fib(n - 2);
        memo.put(n, result);
        return result;
    }

    // Top Down DP With Memoization
    // Time: O(n)
    // Space: O(n)
}


public class Solution {
    public int fib(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }

        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
    // Bottom Up DP With Tabulation
    // Time: O(n)
    // Space: O(n)
}


public class Solution {
    public int fib(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }

        int prev = 0;
        int cur = 1;

        for (int i = 2; i <= n; i++) {
            int next = prev + cur;
            prev = cur;
            cur = next;
        }

        return cur;
    }
    // Bottom Up DP With Constant Space
    // Time: O(n)
    // Space: O(1)
}
