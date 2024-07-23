var getMinimumDifference = function(root) {
    let minDifference = Infinity;
    let prev = null;

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);

        if (prev !== null) {
            minDifference = Math.min(minDifference, Math.abs(node.val - prev));
        }
        prev = node.val;

        dfs(node.right);
    }

    dfs(root);
    return minDifference;
};
