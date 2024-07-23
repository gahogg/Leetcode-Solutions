var mergeKLists = function(lists) {
    const heap = new MinHeap((a, b) => a.val - b.val);

    // Add the initial nodes of each list to the heap
    for (let node of lists) {
        if (node) {
            heap.push(node);
        }
    }

    let dummy = new ListNode(0);
    let cur = dummy;

    while (heap.size() > 0) {
        let node = heap.pop();
        cur.next = node;
        cur = node;
        if (node.next) {
            heap.push(node.next);
        }
    }

    return dummy.next;
};

// MinHeap implementation
class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    push(item) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return top;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        const item = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.compare(item, parent) >= 0) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = item;
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const item = this.heap[index];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swap = null;
            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (this.compare(leftChild, item) < 0) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if ((swap === null && this.compare(rightChild, item) < 0) ||
                    (swap !== null && this.compare(rightChild, this.heap[swap]) < 0)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = item;
    }
}
