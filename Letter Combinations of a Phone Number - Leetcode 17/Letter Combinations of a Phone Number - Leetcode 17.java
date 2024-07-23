import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> ans = new ArrayList<>();
        if (digits.isEmpty()) {
            return ans;
        }
        
        Map<Character, String> letterMap = new HashMap<>();
        letterMap.put('2', "abc");
        letterMap.put('3', "def");
        letterMap.put('4', "ghi");
        letterMap.put('5', "jkl");
        letterMap.put('6', "mno");
        letterMap.put('7', "pqrs");
        letterMap.put('8', "tuv");
        letterMap.put('9', "wxyz");

        backtrack(digits, 0, new StringBuilder(), letterMap, ans);
        return ans;
    }

    private void backtrack(String digits, int index, StringBuilder path, Map<Character, String> letterMap, List<String> ans) {
        if (index == digits.length()) {
            ans.add(path.toString());
            return;
        }
        
        String letters = letterMap.get(digits.charAt(index));
        for (char letter : letters.toCharArray()) {
            path.append(letter);
            backtrack(digits, index + 1, path, letterMap, ans);
            path.deleteCharAt(path.length() - 1);
        }
    }
}
