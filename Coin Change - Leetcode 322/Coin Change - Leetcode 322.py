class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # Brute force with simple recursion
        # Time: O(Coins ^ Amount)
        # Space: O(Amount)
        if amount == 0:
            return 0
        elif amount < 0:
            return -1

        min_cnt = -1
        for coin in coins:
            cnt = self.coinChange(coins, amount - coin)
            if cnt >= 0:
                min_cnt = cnt + 1 if min_cnt < 0 else min(min_cnt, cnt + 1)
        return min_cnt



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
                    
