class DoublyNode {
    constructor(val = -1, next = null, prev = null, key = -1) {
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.key = key; // need this for reverse lookup
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        // Initialize an empty doubly linked list
        this.fakeHead = new DoublyNode();
        this.fakeTail = new DoublyNode();
        this.fakeHead.next = this.fakeTail;
        this.fakeTail.prev = this.fakeHead;

        this.map = new Map(); // will map key -> DoublyNode, where DoublyNode stores the value
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1; // just return -1 if we don't have the key
        else {
            // otherwise, key is in the map.
            // Need to return key->value, and move the node to the front of the line

            const node = this.map.get(key);

            // if it's already at the front, just return key->value
            if (this.fakeHead.next === node) return node.val;
            else {
                // move to front
                const left = node.prev;
                const right = node.next;
                const oldFront = this.fakeHead.next;
                this.fakeHead.next = node;
                node.prev = this.fakeHead;
                node.next = oldFront;
                oldFront.prev = node;
                left.next = right;
                right.prev = left;

                return node.val; // return key->value
            }
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.map.has(key)) {
            // key isn't in the map.
            // Need to create a new node, and make it the front of the line
            const newNode = new DoublyNode(value, null, null, key);
            const oldFront = this.fakeHead.next;
            this.fakeHead.next = newNode;
            newNode.prev = this.fakeHead;
            newNode.next = oldFront;
            oldFront.prev = newNode;

            // add it to the map
            this.map.set(key, newNode);

            // and if we are past capacity, kick one out the end
            if (this.map.size === this.capacity + 1) {
                const oldTail = this.fakeTail.prev;
                this.fakeTail.prev = oldTail.prev;
                oldTail.prev.next = this.fakeTail;

                // make sure to remove it from the map. Automatically fixes capacity issue.
                this.map.delete(oldTail.key);
            }

        } else {
            // the key is in the map.
            // we need to update the node's value, and ensure it's at the front of the line
            const node = this.map.get(key);
            node.val = value;

            // do nothing if it's already at the front
            if (this.fakeHead.next === node) return;
            else {
                // otherwhise, we need to move it to the front
                const left = node.prev;
                const right = node.next;
                const oldFront = this.fakeHead.next;
                this.fakeHead.next = node;
                node.prev = this.fakeHead;
                node.next = oldFront;
                oldFront.prev = node;
                left.next = right;
                right.prev = left;
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
