var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0;
    let r = m * n - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let i = Math.floor(mid / n);
        let j = mid % n;
        let midNum = matrix[i][j];

        if (target === midNum) {
            return true;
        } else if (target < midNum) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return false;
};
