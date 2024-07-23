/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    if (!root) return 0;

    let goodNodes = 0;
    const stk = [[root, -Infinity]];

    while (stk.length > 0) {
        const [node, largest] = stk.pop();

        if (largest <= node.val) {
            goodNodes++;
        }

        const newLargest = Math.max(largest, node.val);
        if (node.right) stk.push([node.right, newLargest]);
        if (node.left) stk.push([node.left, newLargest]);
    }

    return goodNodes;
};
