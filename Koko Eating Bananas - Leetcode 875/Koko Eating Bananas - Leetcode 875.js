var minEatingSpeed = function(piles, h) {
    const canFinish = (k) => {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return hours <= h;
    };

    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (canFinish(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
