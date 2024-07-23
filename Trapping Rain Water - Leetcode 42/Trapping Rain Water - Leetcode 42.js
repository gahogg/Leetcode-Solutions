var trap = function(height) {
    const n = height.length;
    const maxLeft = Array(n).fill(0);
    const maxRight = Array(n).fill(0);
    
    let lWall = 0, rWall = 0;
    
    for (let i = 0; i < n; i++) {
        const j = n - i - 1;
        maxLeft[i] = lWall;
        maxRight[j] = rWall;
        lWall = Math.max(lWall, height[i]);
        rWall = Math.max(rWall, height[j]);
    }
    
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const pot = Math.min(maxLeft[i], maxRight[i]);
        sum += Math.max(0, pot - height[i]);
    }
    
    return sum;
};
