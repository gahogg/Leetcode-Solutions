var merge = function(nums1, m, nums2, n) {
    let x = m - 1, y = n - 1;

    for (let z = m + n - 1; z >= 0; z--) {
        if (x < 0) {
            nums1[z] = nums2[y--];
        } else if (y < 0) {
            break;
        } else if (nums1[x] > nums2[y]) {
            nums1[z] = nums1[x--];
        } else {
            nums1[z] = nums2[y--];
        }
    }
};
