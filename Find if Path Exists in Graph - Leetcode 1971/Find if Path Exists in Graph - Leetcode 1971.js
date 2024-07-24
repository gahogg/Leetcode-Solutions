// Recursive DFS
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;

    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    const seen = new Set();
    seen.add(source);

    const dfs = (node) => {
        if (node === destination) return true;

        for (const neighbor of graph.get(node) || []) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                if (dfs(neighbor)) return true;
            }
        }
        return false;
    };

    return dfs(source);
}


// Iterative DFS With Stack
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;

    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    const seen = new Set();
    const stack = [source];
    seen.add(source);

    while (stack.length > 0) {
        const node = stack.pop();
        if (node === destination) return true;

        for (const neighbor of graph.get(node) || []) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return false;
};


// BFS With Queue
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;

    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    const seen = new Set();
    const queue = [source];
    seen.add(source);

    while (queue.length > 0) {
        const node = queue.shift();
        if (node === destination) return true;

        for (const neighbor of graph.get(node) || []) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return false;
};
