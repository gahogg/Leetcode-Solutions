var isSameTree = function(p, q) {
    return isSame(p, q);
};

function isSame(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSame(p.left, q.left) && isSame(p.right, q.right);
}
