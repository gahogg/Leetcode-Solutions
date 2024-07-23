function checkInclusion(s1, s2) {
    const n1 = s1.length;
    const n2 = s2.length;

    if (n1 > n2) return false;

    const s1Counts = Array(26).fill(0);
    const s2Counts = Array(26).fill(0);

    for (let i = 0; i < n1; i++) {
        s1Counts[s1.charCodeAt(i) - 97]++;
        s2Counts[s2.charCodeAt(i) - 97]++;
    }

    if (s1Counts.every((val, index) => val === s2Counts[index])) return true;

    for (let i = n1; i < n2; i++) {
        s2Counts[s2.charCodeAt(i) - 97]++;
        s2Counts[s2.charCodeAt(i - n1) - 97]--;
        if (s1Counts.every((val, index) => val === s2Counts[index])) return true;
    }

    return false;
}
