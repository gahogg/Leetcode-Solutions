/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    for (const [course, prereq] of prerequisites) {
        if (!graph.has(course)) {
            graph.set(course, []);
        }
        graph.get(course).push(prereq);
    }

    const UNVISITED = 0;
    const VISITING = 1;
    const VISITED = 2;
    const states = new Array(numCourses).fill(UNVISITED);

    const dfs = (node) => {
        if (states[node] === VISITING) return false; // Cycle detected
        if (states[node] === VISITED) return true;  // Already visited

        states[node] = VISITING; // Mark as visiting

        if (graph.has(node)) {
            for (const neighbor of graph.get(node)) {
                if (!dfs(neighbor)) {
                    return false;
                }
            }
        }

        states[node] = VISITED; // Mark as visited
        return true;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
};
