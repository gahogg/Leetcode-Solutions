/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left === undefined ? null : left;
 *     this.right = right === undefined ? null : right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const ans = [];
    const queue = [root];

    while (queue.length > 0) {
        const level = [];
        const n = queue.length;

        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ans.push(level);
    }

    return ans;
};
