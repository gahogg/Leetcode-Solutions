/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left === undefined ? null : left;
 *     this.right = right === undefined ? null : right;
 * }
 */

var isBalanced = function(root) {
    return height(root) !== -1;
};

function height(node) {
    if (node === null) return 0;

    const leftHeight = height(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = height(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
}
