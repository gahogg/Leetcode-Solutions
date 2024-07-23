var lowestCommonAncestor = function(root, p, q) {
    let lca = root;

    while (root !== null) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            lca = root;
            break;
        }
    }

    return lca;
};
