class Solution {
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fib(n - 1) + fib(n - 2);
    }

    // Time: O(2^n)
    // Space: O(n)
};




#include <unordered_map>

class Solution {
    std::unordered_map<int, int> memo;
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (memo.count(n)) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }

    // Time: O(n)
    // Space: O(n)
};




class Solution {
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        std::vector<int> dp(n + 1);
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; ++i) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    // Time: O(n)
    // Space: O(n)
};



class Solution {
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        int prev = 0;
        int cur = 1;

        for (int i = 2; i <= n; ++i) {
            int next = prev + cur;
            prev = cur;
            cur = next;
        }

        return cur;
    }

    // Time: O(n)
    // Space: O(1)
};



