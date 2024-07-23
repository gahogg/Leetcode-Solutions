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
var averageOfSubtree = function(root) {
    let numNodes = 0;

    function dfs(node) {
        if (!node) return [0, 0]; // [node count, sum of values]

        let [leftCount, leftSum] = dfs(node.left);
        let [rightCount, rightSum] = dfs(node.right);

        let nodeCount = 1 + leftCount + rightCount;
        let sum = node.val + leftSum + rightSum;
        let avg = Math.floor(sum / nodeCount);

        if (node.val === avg) numNodes++;

        return [nodeCount, sum];
    }

    dfs(root);
    return numNodes;
};
