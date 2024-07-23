/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left === undefined ? null : left;
 *     this.right = right === undefined ? null : right;
 * }
 */

var averageOfLevels = function(root) {
    let avgs = [];
    if (root === null) return avgs;

    let q = [root];

    while (q.length > 0) {
        let sum = 0;
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            sum += node.val;

            if (node.left !== null) {
                q.push(node.left);
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }
        avgs.push(sum / size);
    }

    return avgs;
};
