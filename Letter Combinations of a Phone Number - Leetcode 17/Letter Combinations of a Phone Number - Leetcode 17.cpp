#include <vector>
#include <string>
#include <unordered_map>

class Solution {
public:
    std::vector<std::string> letterCombinations(std::string digits) {
        std::vector<std::string> ans;
        if (digits.empty()) return ans;

        std::unordered_map<char, std::string> letterMap = {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"}, {'6', "mno"},
            {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}
        };
        
        std::string path;
        backtrack(digits, 0, path, letterMap, ans);
        return ans;
    }

private:
    void backtrack(const std::string& digits, int index, std::string& path,
                   const std::unordered_map<char, std::string>& letterMap,
                   std::vector<std::string>& ans) {
        if (index == digits.size()) {
            ans.push_back(path);
            return;
        }

        const std::string& letters = letterMap.at(digits[index]);
        for (char letter : letters) {
            path.push_back(letter);
            backtrack(digits, index + 1, path, letterMap, ans);
            path.pop_back();
        }
    }
};
