/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        const w = r - l;
        const h = Math.min(height[l], height[r]);
        const a = w * h;
        maxArea = Math.max(maxArea, a);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxArea;
};
