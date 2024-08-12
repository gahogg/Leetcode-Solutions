var canConstruct = function(ransomNote, magazine) {
    let hashmap = {}; 

    for (let ch of magazine) {
        hashmap[ch] = (hashmap[ch] || 0) + 1;
    }

    for (let ch of ransomNote) {
        if (hashmap[ch] > 0) {
            hashmap[ch]--;
        } else {
            return false;
        }
    }

    return true;
};

// Time Complexity: O(m + n)  -> m = length of ransomNote, n = length of magazine
// Space Complexity: O(n)     -> we're using a hashmap
