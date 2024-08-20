var rangeBitwiseAnd = function(m, n) {
    let shift = 0;

    // Shift both numbers to the right until they are equal
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }

    // Shift the common prefix back to its original position
    return m << shift;
};
