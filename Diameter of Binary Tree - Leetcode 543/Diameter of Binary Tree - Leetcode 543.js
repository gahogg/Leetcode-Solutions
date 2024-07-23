/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let largestDiameter = 0;

    function height(node) {
        if (!node) return 0;
        
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        const diameter = leftHeight + rightHeight;
        
        largestDiameter = Math.max(largestDiameter, diameter);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }

    height(root);
    return largestDiameter;
};

// Time Complexity: O(n)
// Space Complexity: O(h) // "h" is the height of the tree
