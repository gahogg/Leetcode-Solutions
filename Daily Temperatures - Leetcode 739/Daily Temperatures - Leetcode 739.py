# Brute Force
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        answer = [0] * n
        for i in range(n):
            for j in range(i+1, n):
                if temperatures[j] > temperatures[i]:
                    answer[i] = j - i
                    break
        
        return answer
# Time: O(n^2)
# Space: O(1)

# Optimal
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        temps = temperatures
        n = len(temps)
        answer = [0] * n
        stk = []

        for i, t in enumerate(temps):
            while stk and stk[-1][0] < t:
                stk_t, stk_i = stk.pop()
                answer[stk_i] = i - stk_i

            stk.append((t, i))
        return answer
        
# Time Complexity: O(n)
# Space Complexity: O(n)
