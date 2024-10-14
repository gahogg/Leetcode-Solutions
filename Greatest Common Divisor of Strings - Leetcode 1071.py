class Solution:
    def gcd(self, a, b):
        if b == 0:
            return a
        return self.gcd(b, a % b)

    def gcdOfStrings(self, str1, str2):
        gcdString = ""

        if str1 + str2 == str2 + str1:
            return str1[0 : self.gcd(len(str1), len(str2))]

        return gcdString

# Time Complexity: O(log(min(n, m))) -- n and m are the lengths of strings s and t respectively.
# Space Complexity: O(log(min(n, m))) -- depending on the number of recursive calls allocation on the stack.
