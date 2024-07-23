#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>
using namespace std;


class Solution {
public:
    Node* cloneGraph(Node* node) {
        if (!node) return nullptr;

        unordered_map<Node*, Node*> oToN;
        stack<Node*> stk;
        unordered_set<Node*> visited;

        stk.push(node);
        visited.insert(node);

        // DFS to create the nodes
        while (!stk.empty()) {
            Node* curr = stk.top();
            stk.pop();
            oToN[curr] = new Node(curr->val);

            for (Node* nei : curr->neighbors) {
                if (visited.find(nei) == visited.end()) {
                    visited.insert(nei);
                    stk.push(nei);
                }
            }
        }

        // DFS to set up neighbors
        for (auto& entry : oToN) {
            Node* oldNode = entry.first;
            Node* newNode = entry.second;
            for (Node* nei : oldNode->neighbors) {
                newNode->neighbors.push_back(oToN[nei]);
            }
        }

        return oToN[node];
    }
};
