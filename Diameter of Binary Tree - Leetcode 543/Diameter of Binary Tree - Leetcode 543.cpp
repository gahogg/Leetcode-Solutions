#include <algorithm> // For std::max
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int largestDiameter = 0;
        height(root, largestDiameter);
        return largestDiameter;
    }
    
private:
    int height(TreeNode* node, int& largestDiameter) {
        if (!node) return 0;
        
        int leftHeight = height(node->left, largestDiameter);
        int rightHeight = height(node->right, largestDiameter);
        int diameter = leftHeight + rightHeight;
        
        largestDiameter = max(largestDiameter, diameter);
        
        return 1 + max(leftHeight, rightHeight);
    }
};

// Time Complexity: O(n)
// Space Complexity: O(h) // "h" is the height of the tree
