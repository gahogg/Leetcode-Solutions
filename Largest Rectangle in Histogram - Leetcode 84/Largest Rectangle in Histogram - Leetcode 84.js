var largestRectangleArea = function(heights) {
    var n = heights.length;
    var stk = [];
    var maxArea = 0;

    for (var i = 0; i < n; i++) {
        var height = heights[i];
        var start = i;
        while (stk.length > 0 && height < stk[stk.length - 1][0]) {
            var [h, j] = stk.pop();
            var w = i - j;
            var a = h * w;
            maxArea = Math.max(maxArea, a);
            start = j;
        }
        stk.push([height, start]);
    }

    while (stk.length > 0) {
        var [h, j] = stk.pop();
        var w = n - j;
        maxArea = Math.max(maxArea, h * w);
    }

    return maxArea;
};
