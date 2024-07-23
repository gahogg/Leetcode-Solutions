#include <unordered_map>
using namespace std;

class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (!head) return nullptr;

        unordered_map<Node*, Node*> oldToNew;
        Node* curr = head;

        // First pass: create all nodes and put them in the map
        while (curr) {
            oldToNew[curr] = new Node(curr->val);
            curr = curr->next;
        }

        // Second pass: set next and random pointers
        curr = head;
        while (curr) {
            Node* newNode = oldToNew[curr];
            newNode->next = oldToNew[curr->next];
            newNode->random = oldToNew[curr->random];
            curr = curr->next;
        }

        return oldToNew[head];
    }
};
