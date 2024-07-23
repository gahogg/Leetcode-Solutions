import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        java.util.Map<Character, Character> hashmap = new java.util.HashMap<>();
        hashmap.put(')', '(');
        hashmap.put('}', '{');
        hashmap.put(']', '[');
        
        Stack<Character> stk = new Stack<>();

        for (char c : s.toCharArray()) {
            if (!hashmap.containsKey(c)) {
                stk.push(c);
            } else {
                if (stk.isEmpty() || stk.pop() != hashmap.get(c)) {
                    return false;
                }
            }
        }

        return stk.isEmpty();
    }
}
