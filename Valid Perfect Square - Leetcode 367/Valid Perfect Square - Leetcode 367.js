var isPerfectSquare = function(num) {
    let l = 1;
    let r = num;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let mSquared = m * m;

        if (num === mSquared) {
            return true;
        } else if (mSquared < num) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return false;
};
