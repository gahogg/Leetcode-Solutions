var minCostConnectPoints = function(points) {
    const n = points.length;
    let totalCost = 0;
    const visited = new Array(n).fill(false);
    const minHeap = [];
    
    minHeap.push([0, 0]); // cost, pointIndex

    while (minHeap.length > 0) {
        const [cost, point] = minHeap.shift();
        
        if (visited[point]) continue;
        
        visited[point] = true;
        totalCost += cost;
        
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                const newCost = Math.abs(points[point][0] - points[i][0]) + Math.abs(points[point][1] - points[i][1]);
                minHeap.push([newCost, i]);
                minHeap.sort((a, b) => a[0] - b[0]); // Maintain min-heap property
            }
        }
    }
    
    return totalCost;
};
