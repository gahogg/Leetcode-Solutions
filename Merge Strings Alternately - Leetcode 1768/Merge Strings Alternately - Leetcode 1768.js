var mergeAlternately = function(word1, word2) {
    let A = word1.length, B = word2.length;
    let a = 0, b = 0;
    let result = '';

    while (a < A && b < B) {
        result += word1[a++];
        result += word2[b++];
    }

    while (a < A) {
        result += word1[a++];
    }

    while (b < B) {
        result += word2[b++];
    }

    return result;
};
