class Solution:
    def addBinary(self, a, b) -> str:
        x, y = int(a, 2), int(b, 2)
        
        while y:
            answer = x ^ y
            carry = (x & y) << 1
            x, y = answer, carry
            
        return bin(x)[2:]
        # Time: O(A + B)
        # Space: O(max(A, B))