/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramsMap = new Map();
    
    strs.forEach(s => {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = count.join(',');
        if (!anagramsMap.has(key)) {
            anagramsMap.set(key, []);
        }
        anagramsMap.get(key).push(s);
    });
    
    return Array.from(anagramsMap.values());
};
