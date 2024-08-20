import java.math.BigInteger;

public class Solution {
    public String addBinary(String a, String b) {
        BigInteger x = new BigInteger(a, 2);
        BigInteger y = new BigInteger(b, 2);

        while (y.compareTo(BigInteger.ZERO) != 0) {
            BigInteger answer = x.xor(y);
            BigInteger carry = x.and(y).shiftLeft(1);
            x = answer;
            y = carry;
        }

        return x.toString(2);
    }
}
