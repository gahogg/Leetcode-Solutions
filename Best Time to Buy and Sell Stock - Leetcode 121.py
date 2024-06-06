class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = float('-inf')
        for i in range(len(prices)):
            for j in range(i+1, len(prices)):
                profit = prices[j] - prices[i]

                if profit > 0:
                    max_profit = max(max_profit, profit)
        
        return max_profit if max_profit > float('-inf') else 0
        # Time: O(N^2) (Brute Force)
        # Space: O(1)


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Time: O(n)
        # Space: O(1)
        min_price = float('inf')
        max_profit = 0        
        
        for price in prices:
            if price < min_price:
                min_price = price
            
            profit = price - min_price
        
            if profit > max_profit:
                max_profit = profit
                
        return max_profit
