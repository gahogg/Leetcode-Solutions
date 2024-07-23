#include <climits>

class Solution {
public:
    int getMinimumDifference(TreeNode* root) {
        prev = nullptr;
        minDiff = INT_MAX;
        inOrderTraversal(root);
        return minDiff;
    }

private:
    TreeNode* prev;
    int minDiff;

    void inOrderTraversal(TreeNode* node) {
        if (node == nullptr) {
            return;
        }

        // Traverse left subtree
        inOrderTraversal(node->left);

        // Compute the minimum difference
        if (prev != nullptr) {
            minDiff = std::min(minDiff, node->val - prev->val);
        }

        // Update previous node
        prev = node;

        // Traverse right subtree
        inOrderTraversal(node->right);
    }
};
