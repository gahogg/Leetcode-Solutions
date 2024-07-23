/**
 * Definition for a Node.
 * function Node(val, neighbors) {
 *     this.val = val;
 *     this.neighbors = neighbors === undefined ? [] : neighbors;
 * }
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const oToN = new Map();
    const stk = [node];
    const visited = new Set();

    visited.add(node);

    // DFS to create the nodes
    while (stk.length > 0) {
        const curr = stk.pop();
        oToN.set(curr, new Node(curr.val));

        for (const nei of curr.neighbors) {
            if (!visited.has(nei)) {
                visited.add(nei);
                stk.push(nei);
            }
        }
    }

    // DFS to set up neighbors
    for (const [oldNode, newNode] of oToN.entries()) {
        for (const nei of oldNode.neighbors) {
            newNode.neighbors.push(oToN.get(nei));
        }
    }

    return oToN.get(node);
};
