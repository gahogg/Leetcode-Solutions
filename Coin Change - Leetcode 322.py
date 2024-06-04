class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # Top Down DP (Memoization)
        # Time: O(Coins * Amount)
        # Space: O(Amount)
        coins.sort()
        memo = {0:0}

        def min_coins(amt):
            if amt in memo:
                return memo[amt]
            
            minn = float('inf')
            for coin in coins:
                diff = amt - coin
                if diff < 0:
                    break
                minn = min(minn, 1 + min_coins(diff))
            
            memo[amt] = minn
            return minn

        result = min_coins(amount)
        if result < float('inf'):
            return result
        else:
            return -1



class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # Bottom Up DP (Tabulation)
        # Time: O(Coins * Amount)
        # Space: O(Amount)
        dp = [0] * (amount + 1)
        coins.sort()

        for i in range(1, amount+1):
            minn = float('inf')
            
            for coin in coins:
                diff = i - coin
                if diff < 0:
                    break
                minn = min(minn, dp[diff] + 1)
            
            dp[i] = minn
        
        if dp[amount] < float('inf'):
            return dp[amount]
        else:
            return -1
                    
