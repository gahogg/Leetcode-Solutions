var preorder = function(root) {
    if (!root) return [];

    let output = [];
    
    function dfs(node) {
        output.push(node.val);
        for (let child of node.children) {
            dfs(child);
        }
    }

    dfs(root);
    return output;
};
