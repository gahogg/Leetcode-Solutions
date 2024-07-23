var isSubtree = function(root, subRoot) {
    function isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    function hasSubtree(root, subRoot) {
        if (!root) return false;
        if (isSameTree(root, subRoot)) return true;
        return hasSubtree(root.left, subRoot) || hasSubtree(root.right, subRoot);
    }
    
    return hasSubtree(root, subRoot);
};
