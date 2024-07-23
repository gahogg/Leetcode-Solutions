#include <vector>
#include <queue>

class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double> avgs;
        if (!root) return avgs;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            double sum = 0;
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                TreeNode* node = q.front();
                q.pop();
                sum += node->val;

                if (node->left) {
                    q.push(node->left);
                }
                if (node->right) {
                    q.push(node->right);
                }
            }
            avgs.push_back(sum / size);
        }

        return avgs;
    }
};
