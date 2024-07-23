var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals based on the starting time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    for (const interval of intervals) {
        // If the merged list is empty or there is no overlap
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            // There is overlap, merge the intervals
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }

    return merged;
};
