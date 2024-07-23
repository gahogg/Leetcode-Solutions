var letterCombinations = function(digits) {
    if (!digits) return [];

    const letterMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno',
        '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const ans = [];
    const backtrack = (index, path) => {
        if (index === digits.length) {
            ans.push(path.join(''));
            return;
        }

        const letters = letterMap[digits[index]];
        for (const letter of letters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    };

    backtrack(0, []);
    return ans;
};
