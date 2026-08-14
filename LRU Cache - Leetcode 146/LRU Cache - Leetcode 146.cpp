#include <unordered_map>
using namespace std;

struct DoublyNode {
    int val;
    DoublyNode* next;
    DoublyNode* prev;
    int key; // need this for reverse lookup

    DoublyNode(int val = -1, DoublyNode* next = nullptr, DoublyNode* prev = nullptr, int key = -1)
        : val(val), next(next), prev(prev), key(key) {}
};

class LRUCache {
public:
    LRUCache(int capacity) {
        // Initialize an empty doubly linked list
        fakeHead = new DoublyNode();
        fakeTail = new DoublyNode();
        fakeHead->next = fakeTail;
        fakeTail->prev = fakeHead;

        this->capacity = capacity;
    }

    int get(int key) {
        if (mp.find(key) == mp.end()) return -1; // just return -1 if we don't have the key
        else {
            // otherwise, key is in the map.
            // Need to return key->value, and move the node to the front of the line

            DoublyNode* node = mp[key];

            // if it's already at the front, just return key->value
            if (fakeHead->next == node) return node->val;
            else {
                // move to front
                DoublyNode* left = node->prev;
                DoublyNode* right = node->next;
                DoublyNode* oldFront = fakeHead->next;
                fakeHead->next = node;
                node->prev = fakeHead;
                node->next = oldFront;
                oldFront->prev = node;
                left->next = right;
                right->prev = left;

                return node->val; // return key->value
            }
        }
    }

    void put(int key, int value) {
        if (mp.find(key) == mp.end()) {
            // key isn't in the map.
            // Need to create a new node, and make it the front of the line
            DoublyNode* newNode = new DoublyNode(value, nullptr, nullptr, key);
            DoublyNode* oldFront = fakeHead->next;
            fakeHead->next = newNode;
            newNode->prev = fakeHead;
            newNode->next = oldFront;
            oldFront->prev = newNode;

            // add it to the map
            mp[key] = newNode;

            // and if we are past capacity, kick one out the end
            if ((int) mp.size() == capacity + 1) {
                DoublyNode* oldTail = fakeTail->prev;
                fakeTail->prev = oldTail->prev;
                oldTail->prev->next = fakeTail;

                // make sure to remove it from the map. Automatically fixes capacity issue.
                mp.erase(oldTail->key);
                delete oldTail;
            }

        } else {
            // the key is in the map.
            // we need to update the node's value, and ensure it's at the front of the line
            DoublyNode* node = mp[key];
            node->val = value;

            // do nothing if it's already at the front
            if (fakeHead->next == node) return;
            else {
                // otherwhise, we need to move it to the front
                DoublyNode* left = node->prev;
                DoublyNode* right = node->next;
                DoublyNode* oldFront = fakeHead->next;
                fakeHead->next = node;
                node->prev = fakeHead;
                node->next = oldFront;
                oldFront->prev = node;
                left->next = right;
                right->prev = left;
            }
        }
    }

private:
    DoublyNode* fakeHead;
    DoublyNode* fakeTail;
    unordered_map<int, DoublyNode*> mp; // will map key -> DoublyNode, where DoublyNode stores the value
    int capacity;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
