var isValidBST = function(root) {
    function isValid(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

        return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
    }

    return isValid(root, -Infinity, Infinity);
};
