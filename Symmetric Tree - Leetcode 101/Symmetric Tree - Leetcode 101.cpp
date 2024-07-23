class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return isMirror(root, root);
    }

private:
    bool isMirror(TreeNode* t1, TreeNode* t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1->val != t2->val) return false;
        
        return isMirror(t1->left, t2->right) && isMirror(t1->right, t2->left);
    }
};
