class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        i, d = 0, 1
        rows = [[] for _ in range(numRows)]

        for char in s:
            rows[i].append(char)
            if i == 0:
                d = 1
            elif i == numRows - 1:
                d = -1
            i += d

        for i in range(numRows):
            rows[i] = ''.join(rows[i])

        return ''.join(rows)
        # Time: O(n * numRows)
        # Space: O(n)   