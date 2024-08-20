import java.math.BigInteger;

public class Solution {
    public String addBinary(String a, String b) {
        // Convert the binary strings to BigInteger
        BigInteger x = new BigInteger(a, 2);
        BigInteger y = new BigInteger(b, 2);

        // Perform the binary addition using bitwise operations
        while (y.compareTo(BigInteger.ZERO) != 0) {
            BigInteger withoutCarry = x.xor(y);
            BigInteger carry = x.and(y).shiftLeft(1);
            x = withoutCarry;
            y = carry;
        }

        // Convert the result back to binary and return it as a string
        return x.toString(2);
    }
}
