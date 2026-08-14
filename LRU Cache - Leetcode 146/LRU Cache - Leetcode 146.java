import java.util.HashMap;
import java.util.Map;

class DoublyNode {
    int val;
    DoublyNode next;
    DoublyNode prev;
    int key; // need this for reverse lookup

    DoublyNode() {
        this(-1, null, null, -1);
    }

    DoublyNode(int val, DoublyNode next, DoublyNode prev, int key) {
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.key = key;
    }
}

class LRUCache {

    private DoublyNode fakeHead;
    private DoublyNode fakeTail;
    private Map<Integer, DoublyNode> map; // will map key -> DoublyNode, where DoublyNode stores the value
    private int capacity;

    public LRUCache(int capacity) {
        // Initialize an empty doubly linked list
        this.fakeHead = new DoublyNode();
        this.fakeTail = new DoublyNode();
        this.fakeHead.next = this.fakeTail;
        this.fakeTail.prev = this.fakeHead;

        this.map = new HashMap<>();
        this.capacity = capacity;
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1; // just return -1 if we don't have the key
        else {
            // otherwise, key is in the map.
            // Need to return key->value, and move the node to the front of the line

            DoublyNode node = map.get(key);

            // if it's already at the front, just return key->value
            if (fakeHead.next == node) return node.val;
            else {
                // move to front
                DoublyNode left = node.prev;
                DoublyNode right = node.next;
                DoublyNode oldFront = fakeHead.next;
                fakeHead.next = node;
                node.prev = fakeHead;
                node.next = oldFront;
                oldFront.prev = node;
                left.next = right;
                right.prev = left;

                return node.val; // return key->value
            }
        }
    }

    public void put(int key, int value) {
        if (!map.containsKey(key)) {
            // key isn't in the map.
            // Need to create a new node, and make it the front of the line
            DoublyNode newNode = new DoublyNode(value, null, null, key);
            DoublyNode oldFront = fakeHead.next;
            fakeHead.next = newNode;
            newNode.prev = fakeHead;
            newNode.next = oldFront;
            oldFront.prev = newNode;

            // add it to the map
            map.put(key, newNode);

            // and if we are past capacity, kick one out the end
            if (map.size() == capacity + 1) {
                DoublyNode oldTail = fakeTail.prev;
                fakeTail.prev = oldTail.prev;
                oldTail.prev.next = fakeTail;

                // make sure to remove it from the map. Automatically fixes capacity issue.
                map.remove(oldTail.key);
            }

        } else {
            // the key is in the map.
            // we need to update the node's value, and ensure it's at the front of the line
            DoublyNode node = map.get(key);
            node.val = value;

            // do nothing if it's already at the front
            if (fakeHead.next == node) return;
            else {
                // otherwhise, we need to move it to the front
                DoublyNode left = node.prev;
                DoublyNode right = node.next;
                DoublyNode oldFront = fakeHead.next;
                fakeHead.next = node;
                node.prev = fakeHead;
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
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
