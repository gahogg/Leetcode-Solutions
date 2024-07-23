var findOrder = function (numCourses, prerequisites) {
    const order = [], queue = []
    const inDegree = new Array(numCourses).fill(0)
    const map = new Map()
    for (let [target, pre] of prerequisites) {
        map.has(pre) ? map.get(pre).push(target) : map.set(pre, [target])
        inDegree[target] += 1
    }
    console.log(map)
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) {
            queue.push(i)
        }
    }
    while (queue.length != 0) {
        let node = queue.shift()
        order.push(node)
        console.log(node, map.get(node))
        if (map.has(node)) {
            for (let tar of map.get(node)) {
                inDegree[tar] -= 1
                if (inDegree[tar] == 0) {
                    queue.push(tar)
                }
            }
        }
    }
    return order.length==numCourses?order:[]
};