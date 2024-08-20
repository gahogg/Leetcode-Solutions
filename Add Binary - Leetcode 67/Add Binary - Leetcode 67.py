class Solution:
    def addBinary(self, a, b) -> str:
        a, b = int(a, 2), int(b, 2)
        
        while b:
            without_carry = a ^ b
            carry = (a & b) << 1
            a, b = without_carry, carry
            
        return bin(a)[2:]
        # Time: O(A + B)
        # Space: O(1)