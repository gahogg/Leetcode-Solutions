var kthSmallest = function(root, k) {
    let count = k;
    let ans = 0;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);

        if (count === 1) {
            ans = node.val;
        }

        count--;
        if (count > 0) {
            dfs(node.right);
        }
    }

    dfs(root);
    return ans;
};
