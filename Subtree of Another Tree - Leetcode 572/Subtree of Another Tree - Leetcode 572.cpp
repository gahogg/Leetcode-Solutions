#include <iostream>

using namespace std;


class Solution {
public:
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        return hasSubtree(root, subRoot);
    }

private:
    bool hasSubtree(TreeNode* root, TreeNode* subRoot) {
        if (!root) {
            return false;
        }

        if (isSameTree(root, subRoot)) {
            return true;
        }

        return hasSubtree(root->left, subRoot) || hasSubtree(root->right, subRoot);
    }

    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (!p && !q) {
            return true;
        }

        if (!p || !q) {
            return false;
        }

        if (p->val != q->val) {
            return false;
        }

        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};
