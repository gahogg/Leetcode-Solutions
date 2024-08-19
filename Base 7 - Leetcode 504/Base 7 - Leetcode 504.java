public class Solution {
    public String convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }

        int originalNum = num;
        num = Math.abs(num);
        StringBuilder remainders = new StringBuilder();

        while (num > 0) {
            int remainder = num % 7;
            remainders.append(remainder);
            num /= 7;
        }

        if (originalNum < 0) {
            remainders.append('-');
        }

        return remainders.reverse().toString();
    }
}
