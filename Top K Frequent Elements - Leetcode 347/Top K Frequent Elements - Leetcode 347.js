var topKFrequent = function(nums, k) {
    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const heap = new MinHeap();

    for (const [num, freq] of countMap) {
        if (heap.size() < k) {
            heap.add([freq, num]);
        } else {
            heap.add([freq, num]);
            heap.poll();
        }
    }

    return heap.toArray().map(pair => pair[1]);
};

// Helper class for MinHeap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    add(pair) {
        this.heap.push(pair);
        this.bubbleUp();
    }

    poll() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let idx = this.size() - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element[0] >= parent[0]) break;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
        this.heap[idx] = element;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.size();
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;

            if (leftChildIdx < length) {
                let leftChild = this.heap[leftChildIdx];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                let rightChild = this.heap[rightChildIdx];
                if ((swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < this.heap[swap][0])) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            idx = swap;
        }
        this.heap[idx] = element;
    }

    toArray() {
        return this.heap;
    }
}










var topKFrequent = function(nums, k) {
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, freq] of count.entries()) {
        buckets[freq].push(num);
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
            if (result.length >= k) {
                return result.slice(0, k);
            }
        }
    }
};
