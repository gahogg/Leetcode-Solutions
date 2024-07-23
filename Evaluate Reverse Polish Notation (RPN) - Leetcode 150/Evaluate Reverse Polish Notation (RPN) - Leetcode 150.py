from math import ceil, floor
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stk = []
        for t in tokens:
            if t in "+-*/":
                b, a = stk.pop(), stk.pop()

                if t == "+":
                    stk.append(a + b)
                elif t == "-":
                    stk.append(a - b)
                elif t == "*":
                    stk.append(a * b)
                else:
                    division = a / b
                    if division < 0:
                        stk.append(ceil(division))
                    else:
                        stk.append(floor(division))
            else:
                stk.append(int(t))

        return stk[0]

# Time Complexity: O(n)
# Space Complexity: O(n)
