var topKFrequent = function(nums, k) {
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, freq] of count.entries()) {
        buckets[freq].push(num);
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
            if (result.length >= k) {
                return result.slice(0, k);
            }
        }
    }
};
