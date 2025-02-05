var levelOrder = function(root) {
    if (!root) return [];

    let output = [];
    let q = [root];

    while (q.length > 0) {
        let n = q.length;
        let level = [];
        for (let i = 0; i < n; i++) {
            let node = q.shift();
            level.push(node.val);
            if (node.children) {
                q.push(...node.children);
            }
        }
        output.push(level);
    }
    return output;
};
