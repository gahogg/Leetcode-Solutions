function networkDelayTime(times, n, k) {
    const graph = new Map();
    for (const [u, v, time] of times) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u).push([v, time]);
    }

    const minHeap = new MinPriorityQueue();
    minHeap.enqueue([k, 0], 0);
    const minTimes = new Map();

    while (!minHeap.isEmpty()) {
        const [node, currentTime] = minHeap.dequeue().element;

        if (minTimes.has(node)) continue;
        minTimes.set(node, currentTime);

        if (graph.has(node)) {
            for (const [neighbor, time] of graph.get(node)) {
                if (!minTimes.has(neighbor)) {
                    minHeap.enqueue([neighbor, currentTime + time], currentTime + time);
                }
            }
        }
    }

    return minTimes.size === n ? Math.max(...minTimes.values()) : -1;
}
