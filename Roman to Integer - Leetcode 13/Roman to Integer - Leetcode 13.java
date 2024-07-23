import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> d = new HashMap<>();
        d.put('I', 1);
        d.put('V', 5);
        d.put('X', 10);
        d.put('L', 50);
        d.put('C', 100);
        d.put('D', 500);
        d.put('M', 1000);

        int summ = 0;
        int n = s.length();
        int i = 0;

        while (i < n) {
            if (i < n - 1 && d.get(s.charAt(i)) < d.get(s.charAt(i + 1))) {
                summ += d.get(s.charAt(i + 1)) - d.get(s.charAt(i));
                i += 2;
            } else {
                summ += d.get(s.charAt(i));
                i++;
            }
        }

        return summ;
    }
}
