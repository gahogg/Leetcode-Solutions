var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue();
    
    for (const stone of stones) {
        maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
        const largest = maxHeap.dequeue().element;
        const nextLargest = maxHeap.dequeue().element;

        if (largest !== nextLargest) {
            maxHeap.enqueue(largest - nextLargest);
        }
    }

    return maxHeap.size() === 0 ? 0 : maxHeap.front().element;
};
