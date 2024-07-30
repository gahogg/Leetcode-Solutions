var sortColors = function(nums) {
    let counts = [0, 0, 0];

    for (let color of nums) {
        counts[color]++;
    }

    let R = counts[0], W = counts[1], B = counts[2];

    nums.fill(0, 0, R);
    nums.fill(1, R, R + W);
    nums.fill(2, R + W, R + W + B);
};
