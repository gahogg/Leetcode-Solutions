class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] order = new int[numCourses];
        int[] inDegree = new int[numCourses];
        Map<Integer, List<Integer>> map = new HashMap<>();
        Queue<Integer> queue = new LinkedList<>();
        // Initialize the graph
        for (int[] pre : prerequisites) {
            int target = pre[0], preCourse = pre[1];
            map.computeIfAbsent(preCourse, k -> new ArrayList<>()).add(target);
            inDegree[target] += 1;
        }
        // Find all courses with no prerequisites
        for (int i = 0; i < numCourses; ++i) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }
        int index = 0;
        while (!queue.isEmpty()) {
            int node = queue.poll();
            order[index++] = node;
            
            if (map.containsKey(node)) {
                for (int target : map.get(node)) {
                    inDegree[target] -= 1;
                    if (inDegree[target] == 0) {
                        queue.offer(target);
                    }
                }
            }
        }
        return index == numCourses ? order : new int[0];
    }
}