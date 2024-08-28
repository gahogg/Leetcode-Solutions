import java.util.HashMap;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> hashmap = new HashMap<>(); 
        
        for (char ch : magazine.toCharArray()) {
            hashmap.put(ch, hashmap.getOrDefault(ch, 0) + 1);
        }

        for (char ch : ransomNote.toCharArray()) {
            if (hashmap.getOrDefault(ch, 0) > 0) {
                hashmap.put(ch, hashmap.get(ch) - 1);
            } else {
                return false;
            }
        }
        
        return true;
    }
}

// Time Complexity: O(m + n)  -> m = len(ransomNote), n = len(magazine)
// Space Complexity: O(n)     -> we're using a hashmap
