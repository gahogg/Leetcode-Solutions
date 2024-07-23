var numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
};
