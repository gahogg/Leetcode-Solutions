import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagramsMap = new HashMap<>();
        
        for (String s : strs) {
            int[] count = new int[26];
            for (char c : s.toCharArray()) {
                count[c - 'a']++;
            }
            StringBuilder key = new StringBuilder();
            for (int num : count) {
                key.append('#').append(num);
            }
            String keyStr = key.toString();
            anagramsMap.computeIfAbsent(keyStr, k -> new ArrayList<>()).add(s);
        }
        
        return new ArrayList<>(anagramsMap.values());
    }
}
