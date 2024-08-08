var hIndex = function(citations) {
    var n = citations.length;
    var paperCounts = new Array(n + 1).fill(0);

    for (var c of citations) {
        paperCounts[Math.min(n, c)]++;
    }

    var h = n;
    var papers = paperCounts[n];

    while (papers < h) {
        h--;
        papers += paperCounts[h];
    }

    return h;
};
