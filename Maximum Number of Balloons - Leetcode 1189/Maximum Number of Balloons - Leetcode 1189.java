import java.util.HashMap;
import java.util.Map;

class Solution {
    public int maxNumberOfBalloons(String text) {
        Map<Character, Integer> counter = new HashMap<>();
        String balloon = "balloon";

        for (char c : text.toCharArray()) {
            if (balloon.indexOf(c) != -1) {
                counter.put(c, counter.getOrDefault(c, 0) + 1);
            }
        }

        if (!counter.containsKey('b') || 
            !counter.containsKey('a') || 
            !counter.containsKey('l') || 
            !counter.containsKey('o') || 
            !counter.containsKey('n')) {
            return 0;
        } else {
            return Math.min(Math.min(counter.get('b'), counter.get('a')), 
                            Math.min(counter.get('l') / 2, 
                                     Math.min(counter.get('o') / 2, counter.get('n'))));
        }
    }
}
