function hasPathSum(root, targetSum) {
    return hasSum(root, 0, targetSum);
}

function hasSum(node, currentSum, targetSum) {
    if (node === null) return false;

    currentSum += node.val;

    if (node.left === null && node.right === null) {
        return currentSum === targetSum;
    }

    return hasSum(node.left, currentSum, targetSum) || hasSum(node.right, currentSum, targetSum);
}
