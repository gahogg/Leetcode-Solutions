#include <algorithm>
using namespace std;

class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        return hasSum(root, 0, targetSum);
    }

private:
    bool hasSum(TreeNode* node, int currentSum, int targetSum) {
        if (node == nullptr) return false;

        currentSum += node->val;

        if (node->left == nullptr && node->right == nullptr) {
            return currentSum == targetSum;
        }

        return hasSum(node->left, currentSum, targetSum) || hasSum(node->right, currentSum, targetSum);
    }
};
