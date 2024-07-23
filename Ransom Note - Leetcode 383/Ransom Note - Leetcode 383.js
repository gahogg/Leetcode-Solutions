function canConstruct(ransomNote, magazine) {
    const counter = {};
    
    for (const c of magazine) {
        counter[c] = (counter[c] || 0) + 1;
    }
    
    for (const c of ransomNote) {
        if (!counter[c] || counter[c] === 0) {
            return false;
        }
        counter[c]--;
    }
    
    return true;
}
