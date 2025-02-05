#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        vector<vector<int>> output;
        if (!root) return output;

        queue<Node*> q;
        q.push(root);

        while (!q.empty()) {
            int n = q.size();
            vector<int> level;
            for (int i = 0; i < n; i++) {
                Node* node = q.front();
                q.pop();
                level.push_back(node->val);
                for (Node* child : node->children) {
                    q.push(child);
                }
            }
            output.push_back(level);
        }
        return output;
    }
};
