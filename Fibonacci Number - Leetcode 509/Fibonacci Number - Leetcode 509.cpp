class Solution {
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fib(n - 1) + fib(n - 2);
    }

    // Time: O(2^n)
    // Space: O(n)
    // Naive Recursive Solution
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
    // Top Down DP With Memoization
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
    // Bottom Up DP With Tabulation
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
    // Bottom Up DP With Constant Space
};



class Solution {
public:

    vector<vector<long long>> mult(vector<vector<long long>> a, vector<vector<long long>> b){
        int n = a.size(),m = b[0].size(),l = a[0].size();
        vector<vector<long long>> ans(n,vector<long long>(m,0));
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                for(int k = 0; k < l; k++){
                    long long temp = (a[i][k]*b[k][j]);
                    ans[i][j] = (ans[i][j] + temp);
                }
            }
        }
        return ans;
    }

    vector<vector<long long>> binpow(vector<vector<long long>> v,int n){
        long long dim = v.size(); 
        vector<vector<long long>> ans(dim,vector<long long>(dim,0));
        
        for(int i = 0; i < dim; i++) ans[i][i] = 1;
        
        while(n){
            if(n & 1) ans = mult(ans,v);
            v = mult(v,v);
            n = n >> 1;
        }
        
        return ans;
    }

    int fib(int n) {
        if(!n) return 0;
        vector<vector<long long>> ma = {
            {0,1},
            {1,1}
        };

        ma = binpow(ma,n);

        return ma[0][1];
    }

    // Time: O(log(n))
    // Space: O(1)
    // Fast matrix exponentation
};
