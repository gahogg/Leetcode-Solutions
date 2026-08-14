class DoublyNode:
    def __init__(self, val=-1, nextt=None, prev=None, key=-1):
        self.val = val
        self.next = nextt
        self.prev = prev
        self.key = key # need this for reverse lookup

class LRUCache:
    def __init__(self, capacity: int):
        # Initialize an empty doubly linked list
        self.fake_head = DoublyNode()
        self.fake_tail = DoublyNode()
        self.fake_head.next = self.fake_tail
        self.fake_tail.prev = self.fake_head

        self.map = {} # will map key -> DoublyNode, where DoublyNode stores the value
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.map: return -1 # just return -1 if we don't have the key
        else:
            # otherwise, key is in the map.
            # Need to return key->value, and move the node to the front of the line

            node = self.map[key]

            # if it's already at the front, just return key->value
            if self.fake_head.next is node: return node.val
            else:
                # move to front
                left = node.prev
                right = node.next
                old_front = self.fake_head.next
                self.fake_head.next = node
                node.prev = self.fake_head
                node.next = old_front
                old_front.prev = node
                left.next = right
                right.prev = left

                return node.val # return key->value

    def put(self, key: int, value: int) -> None:
        if key not in self.map:
            # key isn't in the map.
            # Need to create a new node, and make it the front of the line
            new_node = DoublyNode(value, key=key)
            old_front = self.fake_head.next
            self.fake_head.next = new_node
            new_node.prev = self.fake_head
            new_node.next = old_front
            old_front.prev = new_node

            # add it to the map
            self.map[key] = new_node

            # and if we are past capacity, kick one out the end
            if len(self.map) == (self.capacity + 1):
                old_tail = self.fake_tail.prev
                self.fake_tail.prev = old_tail.prev
                old_tail.prev.next = self.fake_tail

                # make sure to remove it from the map. Automatically fixes capacity issue.
                del self.map[old_tail.key]

        else:
            # the key is in the map.
            # we need to update the node's value, and ensure it's at the front of the line
            node = self.map[key]
            node.val = value

            # do nothing if it's already at the front
            if self.fake_head.next is node: return
            else:
                # otherwhise, we need to move it to the front
                left = node.prev
                right = node.next
                old_front = self.fake_head.next
                self.fake_head.next = node
                node.prev = self.fake_head
                node.next = old_front
                old_front.prev = node
                left.next = right
                right.prev = left

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
